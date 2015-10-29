$(document).on("ready", function() {

  //Selecting a random hue for color changing functions
  var randomHue = function() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  };
  //Random color changing function for border #supergay
  function gayRainbowBorder() {
    $(this).animate({ borderColor: randomHue() }, 'slow', function() {
    $(this).animate({ borderColor: randomHue() }, 'slow', gayRainbowBorder);
    });
  }
  
  $("#profile-avatar").hover(gayRainbowBorder, function(){
    $(this).stop();
  });

  $(".icon").hover(
  function() {
    $(this).closest(".image-link").next().slideDown("fast");
  },
  function() {
    $(this).closest(".image-link").next().slideUp("fast");
  });


})
