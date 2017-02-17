class GamesController < ApplicationController

  def index
    @games = Game.where(player_2_positions: nil)
    reset_session
  end

  def new
    if params[:game_id]
      @game = Game.find(params[:game_id])
      if !@game.player_2_positions
        session[:player] = 2
      else
        render inline: 'ERROR: Player 2 has already been set. <a href="/">Go here to refresh game lobby.</a>'
      end
    else
      session[:player] = 1
      @game = Game.new
    end
  end

  def show
    @game = Game.find(params[:id])
    @player_1_hits = @game.player_1_hits
    @player_1_misses = @game.player_1_misses
    @player_2_hits = @game.player_2_hits
    @player_2_misses = @game.player_2_misses
    if session[:player] == 1
      @positions = @game.player_1_positions
    elsif session[:player] == 2
      @positions = @game.player_2_positions
    else
      render plain: "ERROR: Page not found", status: 404
    end
  end

  def current_player
    if request.xhr?
      game = Game.find(params[:id])
      render plain: "Player #{game.current_player}"
    else
      render plain: "ERROR: Page not found", status: 404
    end
  end

  def check
    game = Game.find(params[:id])
    coordinate = params[:cell_position]
    if game.hit?(coordinate)
      game.add_hit(coordinate)
    else
      game.add_miss(coordinate)
    end
    game.current_player = game.current_player == 1 ? 2 : 1
    game.save
    redirect_to game_url(game)
  end

  def winner
    @game = Game.find(params[:id])
    @winner = params[:winner]
    @game.winner = @winner
    @game.save
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
