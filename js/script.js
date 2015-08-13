$(document).ready(function(){
$(".info-pluto").addClass("hidden");  
$(".info").addClass("hidden");
$(".planet").click(function(){
 $(".info").addClass("hidden");  $(this).children(".info").toggleClass("hidden");
         
});
$(".pluto").click(function(){
  $(".info").addClass("hidden");
$(".info-pluto").toggleClass("hidden");
});

  
$(".name").addClass("hidden");
$(".planet").hover(function(){
         $(this).children(".name").toggleClass("hidden");
});

 });


