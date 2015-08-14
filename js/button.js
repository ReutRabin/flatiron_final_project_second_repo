// $("#spaceBtn").onclick = spacingTrue;

// function spacingTrue(){
//   $("button").addClass$(".sun");
// };
// var mercury = $('mercury');
// var venus = $('venus');
// var earth = $('earth');
// var mars = $('mars');
// var jupiter = $('jupiter');
// var saturn = $('saturn');
// var neptune = $('neptune');
// var uranus = $('uranus');
// var pluto = $('pluto');
function space(){
  
  console.log("function works");
  $('#scale').toggle( function(){
    $('#scale').innerHTML = '*To Scale!';
    $('.mercury').css('margin-left: 1.2%;');
  });
};
