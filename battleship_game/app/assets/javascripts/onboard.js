//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

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
