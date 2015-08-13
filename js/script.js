$(document).ready(function(){
  
$(".info").addClass("hidden");
$(".planet").click(function(){
         $(this).children(".info").toggleClass("hidden");
});
  
$(".name").addClass("hidden");
$(".planet").hover(function(){
         $(this).children(".name").toggleClass("hidden");
});

 });

