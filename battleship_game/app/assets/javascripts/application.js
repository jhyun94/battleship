// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function() {
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

var createField = function() {
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
$('#battlefield').append(createField());

$("#battlefield").on("click",'.cell', function(){
  $.ajax()
  console.log("x: " + this.dataset.x + " y: " + this.dataset.y)
})

$("#destroyer").on("click", function(){
  $("#rotate").off('click');
  $(".cell").off('click');
  
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

  $("#rotate").on("click", function(){
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(".cell").off('click');

    $('.cell').on('mouseover', function(e) {
      var boatLength = 2;
      var x = parseInt(this.dataset.x);
      var y = parseInt(this.dataset.y);
      $(this).addClass("phantom");
      var $next = $('td[data-x=' + (x+1) + '][data-y=' + y + ']')
      $next.addClass("phantom");
    })
    $('.cell').on('mouseleave', function(e) {
      $(this).removeClass("phantom");
      var x = parseInt(this.dataset.x);
      var y = parseInt(this.dataset.y)
      var $next = $('td[data-x=' + (x+1) + '][data-y=' + y + ']')
      $next.removeClass("phantom");
    })
    $('.cell').on('click', function(e) {
      var x = parseInt(this.dataset.x);
      var y = parseInt(this.dataset.y)
      $(".cell").off('mouseover');
      $(".cell").off('mouseleave');
      $(this).addClass("ship")
      $('td[data-x=' + (x+1) + '][data-y=' + y + ']').css("background-color", "").addClass("ship").removeClass('phantom');
      $("#destroyer").hide();
      $(this).removeClass('phantom');
    });
  });
});

$("#submarine").on("click", function(){
  $("#rotate").off('click');
  $(".cell").off('click');

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

  $("#rotate").on("click", function(){
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(".cell").off('click');

    $('.cell').on('mouseover', function(e) {
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      $(this).addClass("phantom");
      for (var i=1; i < boatLength; i++ ){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').addClass("phantom");
        }
    })
    $('.cell').on('mouseleave', function(e) {
      $(this).removeClass("phantom");
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      for (i=1; i<boatLength; i++){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').removeClass("phantom");
      }
    })
    $('.cell').on('click', function(e) {
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      $(".cell").off('mouseover');
      $(".cell").off('mouseleave');
      $(this).addClass("ship")
       for(i=1; i<boatLength; i++){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').addClass("ship").removeClass('phantom');
      }
      $("#submarine").hide();
      $(this).removeClass('phantom');
    });
  })
})

$("#cruiser").on("click", function(){
  $("#rotate").off('click');
  $(".cell").off('click');

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

  $("#rotate").on("click", function(){
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(".cell").off('click');

    $('.cell').on('mouseover', function(e) {
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      $(this).addClass("phantom");
      for (var i=1; i < boatLength; i++ ){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').addClass("phantom");
        }
    })
    $('.cell').on('mouseleave', function(e) {
      $(this).removeClass("phantom");
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      for (i=1; i<boatLength; i++){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').removeClass("phantom");
      }
    })
    $('.cell').on('click', function(e) {
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      $(".cell").off('mouseover');
      $(".cell").off('mouseleave');
      $("#rotate").off('click');
      $(this).addClass("ship")
       for(i=1; i<boatLength; i++){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').addClass("ship").removeClass('phantom');
      }
      $("#cruiser").hide();
      $(this).removeClass('phantom');
    });
  })
});

$("#battleship").on("click", function(){
  $("#rotate").off('click');
  $(".cell").off('click');

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

  $("#rotate").on("click", function(){
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(".cell").off('click');

    $('.cell').on('mouseover', function(e) {
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      $(this).addClass("phantom");
      for (var i=1; i < boatLength; i++ ){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').addClass("phantom");
        }
    })
    $('.cell').on('mouseleave', function(e) {
      $(this).removeClass("phantom");
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      for (i=1; i<boatLength; i++){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').removeClass("phantom");
      }
    })
    $('.cell').on('click', function(e) {
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      $(".cell").off('mouseover');
      $(".cell").off('mouseleave');
      $(this).addClass("ship")
       for(i=1; i<boatLength; i++){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').addClass("ship").removeClass('phantom');
      }
      $("#battleship").hide();
      $(this).removeClass('phantom');
    });
  })
});

$("#carrier").on("click", function(){
  $("#rotate").off('click');
  $(".cell").off('click');
    
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

   $("#rotate").on("click", function(){
    $(".cell").off('mouseover');
    $(".cell").off('mouseleave');
    $(".cell").off('click');

    $('.cell').on('mouseover', function(e) {
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      $(this).addClass("phantom");
      for (var i=1; i < boatLength; i++ ){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').addClass("phantom");
        }
    })
    $('.cell').on('mouseleave', function(e) {
      $(this).removeClass("phantom");
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      for (i=1; i<boatLength; i++){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').removeClass("phantom");
      }
    })
    $('.cell').on('click', function(e) {
      var x = parseInt(this.dataset.x)
      var y = parseInt(this.dataset.y)
      $(".cell").off('mouseover');
      $(".cell").off('mouseleave');
      $(this).addClass("ship")
       for(i=1; i<boatLength; i++){
        $('td[data-x=' + (x+i) + '][data-y=' + y + ']').addClass("ship").removeClass('phantom');
      }
      $("#carrier").hide();
      $(this).removeClass('phantom');
    });
  })
});

$('#start-game').on('click', function(e) {
  var data = { game: { player_1_positions: shipPositions($('.ship')) } }
  $.ajax({
    method: 'post',
    url: '/games',
    data: data
  }).done(function(response) {
    console.log(response);
    window.location = response;
  })

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
