class GamesController < ApplicationController

  def index
    @games = Game.all
  end

  def new
    if params[:game_id] 
      @game = Game.find(params[:game_id])
    else
      @game = Game.new
    end
  end

  def create
    if session[:player] = 1
      game = Game.create(player_1_positions: game_params[:player_positions])
    elsif session[:player] = 2
      game = Game.find(params[:game_id])
      game.player_2_positions = game_params
      game.save
    end
    redirect_to game_url(game)
  end

  def show
    game = Game.find(params[:id])
    if session[:player] = 1
      @positions = game.player_1_positions
    elsif session[:player] = 2
      @positions = game.player_2_positions
    end
  end

  private
    def game_params
      params.permit(:player_positions)
    end
end
