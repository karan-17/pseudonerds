$(function() {

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  $('.lesson-hover').hover(
    function() {
       $(this).find('.text-contents').addClass('text-active');
      
    },
    function() {
       $(this).find('.text-contents').removeClass('text-active');
    }
  );

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
       $answer.slideUp();
       $answer.slideUp();
      // Find the <span> elements inside, then rewrite the content using the text() method
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // Use the slideDown() method to show $answer
      $answer.slideDown();
      
      // Find the <span> elements inside, then rewrite the content using the text() method
      $(this).find('span').text('-');
      
    }
  });
function myFunction(rate) {
  var rates = document.getElementById("rate").value;
var rate_value;
if(rates =='1'){
    rate_value = document.getElementById('r1').value;
    
}else if(rates =='2'){
    rate_value = document.getElementById('r2').value;
    
}else if(rates =='3'){
    rate_value = document.getElementById('r3').value;
}  
else if(rates =='4'){
  rate_value = document.getElementById('r4').value;
}  
else if(rates =='5'){
  rate_value = document.getElementById('r5').value;
}  

document.getElementById('results').innerHTML = rate_value;
}
});
