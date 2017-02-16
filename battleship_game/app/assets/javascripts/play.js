//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
var tableLength = 10;

var player_positions = $('#player_positions').text().split(" ");
var positions = [];
for (var i = 0; i < player_positions.length - 1; i++) {
  var coordinates = player_positions[i].split("");
  var position = { x: coordinates[0], y: coordinates[1]};
  positions.push(position);
}

var createNewGrid = function(positions) {
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

  $("#board").html(createNewGrid(positions));

  for (var i = 0; i < positions.length; i++) {
    $('td[data-x=' + positions[i].x + '][data-y=' + positions[i].y + ']').addClass('ship');
  }

})
