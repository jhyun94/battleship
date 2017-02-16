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

  $("#player_board").html(createNewGrid(positions));

  for (var i = 0; i < positions.length; i++) {
    $('td[data-x=' + positions[i].x + '][data-y=' + positions[i].y + ']').addClass('ship');
  }

  var createGrid = function() {
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
  $('#opponent_board').append(createGrid());

  $("#opponent_board .cell").on('click', function(e){
    console.log($(this.dataset));
    var cell = this;
    var gameId = $('#player_board').attr('class');
    console.log(gameId);
    var cell_position = this.dataset.x + this.dataset.y
    $.ajax({
      url: "/games/" + gameId + "/check?cell_position=" + cell_position,
      type: "GET"
    }).done(function(data){
      console.log(data);
      console.log(cell);
      $(cell).off();
      if (data.response === "hit"){
        $(cell).addClass('hit');
      } else if (data.response === "miss") {
        $(cell).addClass('miss');
      } else {
        console.log(data.response);
      }

    })
  })










})
