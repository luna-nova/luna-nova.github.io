$(document).on("ready", function() {

  //Selecting a random hue for color changing functions
  var randomHue = function() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  };

  //Random color changing functions #supergay
  function gayRainbowBorder() {
    $(this).animate({ borderColor: randomHue() }, 'slow', function() {
    $(this).animate({ borderColor: randomHue() }, 'slow', gayRainbowBorder);
    });
  }
  function gayRainbowText() {
    $(this).animate({ color: randomHue() }, 'slow', function() {
    $(this).animate({ color: randomHue() }, 'slow', gayRainbowText);
    });
  }

  //Hovered Elements that it applies to:
  $("#profile-avatar").hover(gayRainbowBorder, function(){
    $(this).animate({ borderColor: 'white' }, 'slow');
    $(this).stop();
  });

  $(".email-link").hover(gayRainbowText, function(){
    $(this).animate({ color: 'rgb(21, 52, 52)' }, 'slow');
    $(this).stop();
  });

  //SIDEBAR: Sliding link text
  $(".icon").hover(
  function() {
    $(this).closest(".image-link").next().stop().slideDown("fast");
  },
  function() {
    $(this).closest(".image-link").next().stop().slideUp("fast");
  });


})
