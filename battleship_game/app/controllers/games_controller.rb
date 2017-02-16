class GamesController < ApplicationController

  def index
    @games = Game.all
  end

  def new
    if params[:game_id]
      @game = Game.find(params[:game_id])
      session[:player] = 2
    else
      session[:player] = 1
      @game = Game.new
    end
  end

  def show
    @game = Game.find(params[:id])
    if session[:player] == 1
      @positions = @game.player_1_positions
    elsif session[:player] == 2
      @positions = @game.player_2_positions
    end
  end

  def current_player
    game = Game.find(params[:id])
    game.current_player.to_s
  end

  def check
    game = Game.find(params[:id])
    coordinate = params[:cell_position]
    case game.current_player
    when 1
      response = game.player_2_positions.include?(coordinate) ? "hit" : "miss"
    when 2
      response = game.player_1_positions.include?(coordinate) ? "hit" : "miss"
    end
    game.current_player = game.current_player == 1 ? 2 : 1
  end

  def create
    if session[:player] == 1
      game = Game.create(player_1_positions: game_params[:player_positions])
    end
    redirect_to game_url(game)
  end

  def update
    game = Game.find(params[:id])
    game.player_2_positions = game_params[:player_positions]
    game.current_player = 2
    game.save
    session[:player] = 2
    redirect_to game_url(game)
  end

  private
    def game_params
      params.permit(:player_positions)
    end
end
