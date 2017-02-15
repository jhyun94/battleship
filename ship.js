var tableLength = 10;
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

$('#board').append(createGrid());

$('.cell').on('click', function(e) {
  console.log("x: " + this.dataset.x + " y: " + this.dataset.y)
})

$("#patrol_boat").on("click", function(){
  $('.cell').on('mouseover', function(e) {
    var boatLength = 2;
    var x = this.dataset.x
    $(this).css('background-color', 'gray');
    var $next = $('td[data-x=' + x + '][data-y=' + (parseInt(this.dataset.y) + 1) + ']')
    $next.css('background-color', 'gray');
  })
  $('.cell').on('mouseleave', function(e) {
    $(this).css('background-color', 'white');
    var x = this.dataset.x
    var $next = $('td[data-x=' + x + '][data-y=' + (parseInt(this.dataset.y) + 1) + ']')
    $next.css('background-color', 'white');
  })
});
