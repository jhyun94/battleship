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

$("#destroyer").on("click", function(){
  $('.cell').on('mouseover', function(e) {
    var boatLength = 2;
    var x = this.dataset.x;
    var y = parseInt(this.dataset.y);
    $(this).addClass("phantom");
    var $next = $('td[data-x=' + x + '][data-y=' + (y + 1) + ']')
    $next.addClass("phantom");
  })
  $('.cell').on('mouseleave', function(e) {
    $(this).removeClass("phantom");
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    var $next = $('td[data-x=' + x + '][data-y=' + (y + 1) + ']')
    $next.removeClass("phantom");
  })
  $('.cell').on('click', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(this).addClass("ship")
    $('td[data-x=' + x + '][data-y=' + (y + 1) + ']').css("background-color", "").addClass("ship").removeClass('phantom');
    $("#destroyer").hide();
    $(this).removeClass('phantom');

  });
});

$("#submarine").on("click", function(){
  var boatLength = 3;
  $('.cell').on('mouseover', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(this).addClass("phantom");
    for (var i=1; i < boatLength; i++ ){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').addClass("phantom");
      }
  })
  $('.cell').on('mouseleave', function(e) {
    $(this).removeClass("phantom");
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    for (i=1; i<boatLength; i++){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').removeClass("phantom");
    }
  })
  $('.cell').on('click', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(this).addClass("ship")
     for(i=1; i<boatLength; i++){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').addClass("ship").removeClass('phantom');
    }
    $("#submarine").hide();
    $(this).removeClass('phantom');
  });
});

$("#cruiser").on("click", function(){
  var boatLength = 3;
  $('.cell').on('mouseover', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(this).addClass("phantom");
    for (var i=1; i < boatLength; i++ ){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').addClass("phantom");
      }
  })
  $('.cell').on('mouseleave', function(e) {
    $(this).removeClass("phantom");
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    for (i=1; i<boatLength; i++){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').removeClass("phantom");
    }
  })
  $('.cell').on('click', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(this).addClass("ship")
     for(i=1; i<boatLength; i++){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').addClass("ship").removeClass('phantom');
    }
    $("#cruiser").hide();
    $(this).removeClass('phantom');
  });
});

$("#battleship").on("click", function(){
  var boatLength = 4;
  $('.cell').on('mouseover', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(this).addClass("phantom");
    for (var i=1; i < boatLength; i++ ){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').addClass("phantom");
      }
  })
  $('.cell').on('mouseleave', function(e) {
    $(this).removeClass("phantom");
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    for (i=1; i<boatLength; i++){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').removeClass("phantom");
    }
  })
  $('.cell').on('click', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(this).addClass("ship")
    for(i=1; i<boatLength; i++){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').addClass("ship").removeClass('phantom');
    }
    $("#battleship").hide();
    $(this).removeClass('phantom');
  });
});

$("#carrier").on("click", function(){
    var boatLength = 5;
  $('.cell').on('mouseover', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(this).addClass("phantom");
    for (var i=1; i < boatLength; i++ ){
    $('td[data-x=' + x + '][data-y=' + (y + i) + ']').addClass("phantom");
  }
  })
  $('.cell').on('mouseleave', function(e) {
    $(this).removeClass("phantom");
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    for (i=1; i<boatLength; i++){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').removeClass("phantom");
    }
  })
  $('.cell').on('click', function(e) {
    var x = this.dataset.x
    var y = parseInt(this.dataset.y)
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(this).addClass("ship")
    for(i=1; i<boatLength; i++){
      $('td[data-x=' + x + '][data-y=' + (y + i) + ']').addClass("ship").removeClass('phantom');
    }
    $("#carrier").hide();
    $(this).removeClass('phantom');
  });
});




