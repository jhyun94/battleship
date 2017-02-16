class GamesController < ApplicationController
  def new
    @game = Game.new
  end

  def create
    @game = Game.create(game_params)
    render plain: game_url(@game)
  end

  def show
    @game = Game.find(params[:id])
  end

  private
    def game_params
      params.require(:game).permit(:player_1_positions)
    end
end
