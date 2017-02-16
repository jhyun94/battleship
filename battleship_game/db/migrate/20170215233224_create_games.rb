class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :player_1_positions, { null: false }
      t.string :player_2_positions

      t.timestamps
    end
  end
end
