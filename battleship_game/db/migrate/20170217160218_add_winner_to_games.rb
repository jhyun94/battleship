class AddWinnerToGames < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :winner, :string, default: ""
  end
end
