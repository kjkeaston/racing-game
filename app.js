$(document).ready(function() {
  console.log("js loaded!");



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
  }});

}

playOnLoad();


// $('#x-wing').animate("slow","linear");

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
}});

// $("body").onload(function() {
  
// });

$(".start").on("click", function() {
  $("#x-wing").animate({marginRight: "1800px"});
  $("#x-wing").fadeIn();
  $("#x-wing").animate({"margin-left":"1500px"}, 3000, "swing", function() {
      $("#x-wing").animate({"margin-left":"0px"}, 2000, "swing", function(){
              console.log("avengers assemble");})})});















});