$(document).ready(function() {
  console.log("js loaded!");






// window.addEventListener("keydown", function (event) {
//   if (event.defaultPrevented) {
//     return; // Do nothing if the event was already processed
//   }
//   switch (event.key) {
//     case "a":
//       // function for moving sith
//       $('#darth-maul').animate({marginLeft: "100px"});
//       console.log("sith")
//       break;
//     case "l":
//       // function for moving jedi
//       console.log("jedi")
//       break;
//     default:
//       return; // Quit when this doesn't handle the key event.
//   }
//   // Cancel the default action to avoid it being handled twice
//   event.preventDefault();
// }, true);

// keyClick = [65, 76]



// var mySith = $('#darth-maul');
// $(document).bind('keydown',function(e){
//    if(e.keyCode == keyClick[0]) {
//       mySith.animate({marginLeft: "`${i}`100px"});
//    }
// });

// var myJedi = $('#obi-wan');
//     $(document).bind('keydown',function(e){
//        if(e.keyCode == keyClick[1]) {
//           myJedi.animate({marginLeft: "100px"});
//        }
//     });

// var clickA = $(document).bind('keydown',function(e){
//        if(e.keyCode == 65) {
//           myJedi.animate({marginLeft: "100px"});
//         }});
// return clickA


$(document).bind('keydown',function(pressA){
    if(pressA.keyCode === 65) {
      console.log("pressing A");
      $('#darth-maul').animate({marginLeft: "+=100px"});}
    else if (pressA.keyCode === 76) {
      console.log("pressing L");
      $('#obi-wan').animate({marginLeft: "+=100px"});}
    });

// $(document).bind('keydown',function(pressL){
//     pressL.keyCode === 76;
//     console.log("pressing L")
//     $('#obi-wan').animate({marginLeft: "+=100px"});
//   });

























});