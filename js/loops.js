$(document).ready(function(){
  // alert("hello");
  function loopingAnimation() {
    $(".block1").fadeIn(3000).delay(1000).fadeOut(4000);
    setTimeout(function() {
      $(".block2").fadeIn(1500).delay(2500).fadeOut(750);
    }, 1234);
  }

  setInterval(loopingAnimation, 2000);
});

