class Game < ActiveRecord::Base
  
  def add_hit(coordinate)
    case current_player
    when 1
      self.player_1_hits = player_1_hits + coordinate
    when 2
      self.player_2_hits = player_2_hits + coordinate
    end
  end

  def add_miss(coordinate)
    case current_player
    when 1
      self.player_1_misses = player_1_misses + coordinate
    when 2
      self.player_2_misses = player_2_misses + coordinate
    end
  end

  def hit?(coordinate)
    case current_player
    when 1
      player_2_positions.include?(coordinate)
    when 2
      player_1_positions.include?(coordinate)
    end
  end

  def miss?(coordinate)
    !hit?(coordinate)
  end
end
