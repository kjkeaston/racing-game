$(document).ready(function() {

  console.log("js loaded!");

// --> song code here
function playOnLoad () {
  let playing = true;
  $("#theme-song").get(0).play();
  $("#stop").on("click", function () {
    console.log("stopper");
    if (playing === true) {
      $("#theme-song").get(0).pause();
      return playing = false;
    } else if (playOnLoad !== true) {
      $("#theme-song").get(0).play();
      return playing = true;
    }
  });
}
playOnLoad();
//--> end song code
//
//
//
// --> x-wing animation here
$(".start").on("click", function() {
// $("#x-wing").animate({marginRight: "1800px"}); 
$("#x-wing").fadeIn();
  $("#x-wing").animate({"marginLeft":"2000px"}, 3000, "swing", function() {
    $("#x-wing").fadeOut();
  });
});
// --> end x-wing code
//
//
//
// --> player move code
let isStart = false;

$(".start").on("click", function() {
  if (isStart === false) {
    $(document).bind('keydown',function(pressA){
      if(pressA.keyCode === 65) {
        $('#darth-maul').animate({marginLeft: "+=100px"});
         if ($("#darth-maul").css("marginLeft") === ("1300px")) {
          $(".vaderdiv").css({display: "block"});
        }
      } else if (pressA.keyCode === 76) {
        $('#obi-wan').animate({marginLeft: "+=100px"});
        if ($('#obi-wan').css("marginLeft") === ("1300px")) {
          $('.yodadiv').css({display: "block"});
        }
      }
    });
  }
});
//
// --> end player move code






// !*!*!*!*!*!*!
//
// --> another way to write it player movements -->
//
// $(document).bind('keydown',function(pressA) {
//     if(pressA.keyCode === 65) {
//       $('#darth-maul').animate({marginLeft: "+=100px"});
//     };
//       if ($("#darth-maul").css("marginLeft") === ("1300px")) {
//         $(".vaderdiv").css({display: "block"});
//         isStart !== false;
//       }
//     });
//
//     $(document).bind('keydown',function(pressL) {
//       if (pressL.keyCode === 76) {
//        $('#obi-wan').animate({marginLeft: "+=100px"});
//      };
//        if ($('#obi-wan').css("marginLeft") === ("1300px")) {
//         $('.yodadiv').css({display: "block"});
//           isStart !== false;
//         }
//       });
//   }
// });
// !*!*!*!*!*!*!




















});