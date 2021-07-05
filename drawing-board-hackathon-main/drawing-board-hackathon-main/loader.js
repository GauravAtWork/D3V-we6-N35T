// Wait for window load

$(window).on("load", () => {
  // Animate loader off screen
  setTimeout( function() {
    $(".se-pre-con").fadeOut();

  },5000) ;
}).fadeIn("slow");
