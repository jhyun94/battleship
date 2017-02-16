class AddHitsAndMissesToGames < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :player_1_hits, :string, default: ""
    add_column :games, :player_1_misses, :string, default: ""
    add_column :games, :player_2_hits, :string, default: ""
    add_column :games, :player_2_misses, :string, default: ""
  end
end
