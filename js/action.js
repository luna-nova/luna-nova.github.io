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
    }
  );

  //MUSIC PAGE: Color Block Focus Animation
  //TODO: A Cleaner Way to do this. I'm new to JQuery >:v
  
  $(".music-info-box").hover(
    function() {
      var musicParent = $(this).closest(".music-section");

      musicParent.find("#cba1").show("slide", { direction: "left"}, 200 );
      musicParent.find("#cba2").show("slide", { direction: "right"}, 200 );
      musicParent.find("#cba3").show("slide", { direction: "down"}, 200 );
      musicParent.find("#cba4").show("slide", { direction: "up"}, 200 );
    },
    function() {
      var musicParent = $(this).closest(".music-section");

      musicParent.find("#cba1").hide("slide", { direction: "left"}, 200 );
      musicParent.find("#cba2").hide("slide", { direction: "right"}, 200 );
      musicParent.find("#cba3").hide("slide", { direction: "down"}, 200 );
      musicParent.find("#cba4").hide("slide", { direction: "up"}, 200 );
    }
  );

})
