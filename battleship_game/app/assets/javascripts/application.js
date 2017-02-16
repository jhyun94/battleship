//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var orientation = 'vertical';

function Cell(x, y) {
  this.x = x;
  this.y = y;
}

Cell.prototype.toHtml = function() {
  var $cell = $('<td></td>');
  $cell.addClass('cell').attr('data-x', this.x).attr('data-y', this.y);
  return $cell;
}

function Game() {
  this.createBoard();
  this.bindSetupEvents(orientation);
}

Game.prototype.ships = [
  {
    buttonId: '#destroyer',
    length: 2
  },
  {
    buttonId: '#submarine',
    length: 3
  },
  {
    buttonId: '#cruiser',
    length: 3
  },
  {
    buttonId: '#battleship',
    length: 4
  },
  {
    buttonId: '#carrier',
    length: 5
  }
]

Game.prototype.createBoard = function() {
  var tableLength = 10; 

  for (var col = 0; col < tableLength; col++) {
    var $boardRow = $('<tr></tr>');
    $('#board').append($boardRow);
    for (var row = 0; row < tableLength; row++) {
      $boardRow.append(new Cell(row, col).toHtml());
    }
  }
}

Game.prototype.bindCellEvents = function(ship, orientation) {
  $('.cell').on('mouseover', function() {
    var x = parseInt(this.dataset.x);
    var y = parseInt(this.dataset.y);
    $(this).addClass('phantom');
    for (var i = 1; i < ship.length; i++) {
      if (orientation == 'horizontal') {
        x += 1;
      } else {
        y += 1;
      }
      $('td[data-x=' + x + '][data-y=' + y + ']').addClass('phantom');
    }
  }).on('mouseleave', function() {
    var x = parseInt(this.dataset.x);
    var y = parseInt(this.dataset.y);
    $(this).removeClass('phantom');
    for (var i = 1; i < ship.length; i++) {
      if (orientation == 'horizontal') {
        x += 1;
      } else {
        y += 1;
      }
      $('td[data-x=' + x + '][data-y=' + y + ']').removeClass('phantom');
    }
  }).on('click', function() {
    var x = parseInt(this.dataset.x);
    var y = parseInt(this.dataset.y);
    $(ship.buttonId).remove();
    $('.cell').off('mouseover').off('mouseleave'); 
    $(this).addClass('ship');
    for (var i = 1; i < ship.length; i++) {
      if (orientation == 'horizontal') {
        x += 1;
      } else {
        y += 1;
      }
      $('td[data-x=' + x + '][data-y=' + y + ']').addClass('ship');
    }
  });
}

Game.prototype.setShip = function(ship, orientation) {
  var game = this;
  $(ship.buttonId).on('click', function() {
    game.bindCellEvents(ship, orientation);
    $("#rotate-ship").on("click", function(){
      if (orientation === 'horizontal') {
        orientation = 'vertical';
      } else {
        orientation = 'horizontal';
      }
      $(".cell").off();
      game.bindCellEvents(ship, orientation);
    });
  })
}

Game.prototype.bindSetupEvents = function(orientation) {
  for (var i = 0; i < this.ships.length; i++) {
    this.setShip(this.ships[i], orientation);
  }
}

// function switchOrientation() {
//   if (orientation == 'vertical') {
//     orientation = 'horizontal'
//   } else {
//     orientation = 'vertical'
//   }
// }

$(document).ready(function() {

  var game = new Game();
  
});
