var $scroll_content;
var $count = 0;

window.onload = function() {
  $('#contentArea').css({'opacity':0.0,'transition':'opacity 0.3s ease-in'});
}

// Scroll starts
$(window).on('scroll', function(){
  console.log('Scrolling active');
  $('#contentArea').css({'opacity':1.0});
})

// Scroll ends
$(window).on('scrollend', function() {
  console.log('Scrolling stopped');
  $('#contentArea').css({'opacity':0.0});
});
