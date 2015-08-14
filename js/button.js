function space(){
  
  console.log("function works");
  $('#scale').toggle( function(){
    $('#scale').innerHTML = '*To Scale!';
    $('#mercury-real').toggleClass('mercury', false);
    $('#mercury-real').toggleClass('mercury-real', true);
    
     $('#venus-real').toggleClass('venus', false);
    $('#venus-real').toggleClass('venus-real', true);
    
     $('#earth-real').toggleClass('earth', false);
    $('#earth-real').toggleClass('earth-real', true);
    
     $('#mars-real').toggleClass('mars', false);
    $('#mars-real').toggleClass('mars-real', true);
    
     $('#jupiter-real').toggleClass('jupiter', false);
    $('#jupiter-real').toggleClass('jupiter-real', true);
    
     $('#saturn-real').toggleClass('saturn', false);
    $('#saturn-real').toggleClass('saturn-real', true);
    
     $('#uranus-real').toggleClass('uranus', false);
    $('#uranus-real').toggleClass('uranus-real', true);
    
     $('#neptune-real').toggleClass('neptune', false);
    $('#neptune-real').toggleClass('neptune', true);
    
     $('#pluto-real').toggleClass('pluto', false);
    $('#pluto-real').toggleClass('pluto-real', true);
   
    $('#everything').toggleClass('everything', false);
    $('#everything').toggleClass('everything-scaled', true);
  });
  
  
};

function space1(){
  
  console.log("orginal spacing");
  $('#scale').toggle( function(){
    $('#scale').innerHTML = '*To Scale!';
    $('#mercury-real').toggleClass('mercury', true);
    $('#mercury-real').toggleClass('mercury-real', false);
    
     $('#venus-real').toggleClass('venus', true);
    $('#venus-real').toggleClass('venus-real', false);
    
     $('#earth-real').toggleClass('earth', true);
    $('#earth-real').toggleClass('earth-real', false);
    
     $('#mars-real').toggleClass('mars', true);
    $('#mars-real').toggleClass('mars-real', false);
    
     $('#jupiter-real').toggleClass('jupiter', true);
    $('#jupiter-real').toggleClass('jupiter-real', false);
    
     $('#saturn-real').toggleClass('saturn', true);
    $('#saturn-real').toggleClass('saturn-real', false);
    
     $('#uranus-real').toggleClass('uranus', true);
    $('#uranus-real').toggleClass('uranus-real', false);
    
     $('#neptune-real').toggleClass('neptune', true);
    $('#neptune-real').toggleClass('neptune', false);
    
     $('#pluto-real').toggleClass('pluto', true);
    $('#pluto-real').toggleClass('pluto-real', false);
  
    $('#everything').toggleClass('everything', true);
    $('#everything').toggleClass('everything-scaled', false);
  });
  
  
};
