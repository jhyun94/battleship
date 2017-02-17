$(document).ready(function() {
var tableLength = 10;
var orientation = 'vertical';

// Hide battle buttons
$(".new_game").hide();
$(".edit_game").hide();
var buttonsClicked = 0
var trackButtons = function() {
  buttonsClicked += 1
  if (buttonsClicked === 5) {
    $(".new_game").show();
    $(".edit_game").show();
    $("#rotate").hide();
  }
  buttons_clicked = 0;
}

function createGrid() {
  var grid = "<table>"
  for (var row = 0; row < tableLength; row++) {
    grid += '<tr>';
    for (var col = 0; col < tableLength; col++) {
      grid += '<td class="cell" data-x=' + col + ' data-y=' + row + '></td>';
    }
    grid += '</tr>';
  }
  grid += '</table>';
  return grid;
}
$('#board').append(createGrid());

var ships = [
  { buttonId: "#destroyer", length: 2 },
  { buttonId: "#submarine", length: 3 },
  { buttonId: "#cruiser", length: 3 },
  { buttonId: "#battleship", length: 4 },
  { buttonId: "#carrier", length: 5 }
]

bindSetupEvents(orientation);

function bindSetupEvents(orientation) {
  for (var i = 0; i < ships.length; i++) {
    setShip(ships[i], orientation);
  }
}

function setShip(ship, orientation) {
  $(ship.buttonId).on('click', function() {
    bindCellEvents(ship, orientation);
    $("#rotate").on("click", function(){
      $('.cell').off();
      if (orientation === 'horizontal') {
        orientation = 'vertical';
      } else {
        orientation = 'horizontal';
      }
      bindCellEvents(ship, orientation);
    });
  })
}

function bindCellEvents(ship, orientation) {
  $('.cell').on('mouseover', function(e) {
    var x, y;
    $(this).addClass("phantom");
    for (var i = 1; i < ship.length; i++) {
      console.log(ship.length);
      if (orientation === 'vertical') {
        x = parseInt(this.dataset.x);
        y = parseInt(this.dataset.y) + i;
      } else if (orientation === 'horizontal') {
        x = parseInt(this.dataset.x) + i;
        y = parseInt(this.dataset.y);
      }
      var $next = $('td[data-x=' + x + '][data-y=' + y + ']')
      $next.addClass("phantom");
    }
  }).on('mouseleave', function(e) {
    $(this).removeClass("phantom");
    var x, y;
    for (var i = 1; i < ship.length; i++) {
      if (orientation === 'vertical') {
        x = parseInt(this.dataset.x);
        y = parseInt(this.dataset.y) + i;
      } else if (orientation === 'horizontal') {
        x = parseInt(this.dataset.x) + i;
        y = parseInt(this.dataset.y);
      }
      var $next = $('td[data-x=' + x + '][data-y=' + y + ']')
      $next.removeClass("phantom");
    }
  }).on('click', function(e) {
    $('#rotate').off();
    $('.cell').off('mouseover').off('mouseleave').off('click');
    $(this).addClass('ship').removeClass('phantom');

    var x, y;
    for (var i = 1; i < ship.length; i++) {
      if (orientation === 'vertical') {
        x = parseInt(this.dataset.x);
        y = parseInt(this.dataset.y) + i;
      } else if (orientation === 'horizontal') {
        x = parseInt(this.dataset.x) + i;
        y = parseInt(this.dataset.y);
      }
      var $next = $('td[data-x=' + x + '][data-y=' + y + ']')
      $next.removeClass("phantom").addClass('ship');
    }
    $(ship.buttonId).remove();
    trackButtons();
  });
}

$('form').on('submit', function(e) {
  e.preventDefault(e);
  var data = { player_positions: shipPositions($('.ship')) }
  var input = $("<input>")
              .attr("type", "hidden")
              .attr("name", "player_positions").val(shipPositions($('.ship')));
	$(this).append($(input));
	$(this).off();
	$(this).submit();
})

// Extracts ship positions and sends them to database
function shipPositions(cells) {
  var result = ""
  for (var i = 0; i < cells.length; i++) {
    result += cells[i].dataset.x
    result += cells[i].dataset.y
    result += " ";
  }
  return result;
}

})
