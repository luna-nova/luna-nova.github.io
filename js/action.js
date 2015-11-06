//JQUERY ANIMATION + INTERACTIVES
//by Lunanova


$(document).on("ready", function() {

  //Width variable for animation checking & event checker for screen resize
  var winWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  $(window).on("resize", function() {
    winWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    if (winWidth < 580) {
      $(".text").stop().css({ display: "block" });
    } else {
      $(".text").stop().css({ display: "none" });
    }
  })

  //Selecting a random hue for color changing functions
  function randomHue() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  };

  //Random color changing functions #supergay
  function gayRainbowBorder() {
    if(winWidth > 580) {
      $(this).animate({ borderColor: randomHue() }, 'slow', function() {
      $(this).animate({ borderColor: randomHue() }, 'slow', gayRainbowBorder);
      });
    }
  }
  function gayRainbowText() {
    $(this).animate({ color: randomHue() }, 'slow', function() {
    $(this).animate({ color: randomHue() }, 'slow', gayRainbowText);
    });
  }

  //Hovered Elements that it applies to:
  $("#profile-avatar").hover(gayRainbowBorder, function() {
    if(winWidth > 580) {
      $(this).animate({ borderColor: 'white' }, 'slow');
      $(this).stop();
    }
  });

  $(".email-link").hover(gayRainbowText, function(){
    $(this).animate({ color: 'rgb(21, 52, 52)' }, 'slow');
    $(this).stop();
  });

  //SIDEBAR: Sliding link text
  $(".icon").hover(
    function() {
      if (winWidth > 580) {
        $(this).closest(".image-link").next().stop().slideDown("fast");
      }
    },
    function() {
      if (winWidth > 580) {
        $(this).closest(".image-link").next().stop().slideUp("fast");
      }
    }
  );
  $("#profile-avatar").on('click', function() {
    $(this).css({ borderColor: randomHue() });
  })

  //MUSIC PAGE: Color Block Focus Animation
  //TODO: A cleaner way to do this. I know there's some shortcut or something
  //that I don't know about. I'm new to JQuery, okay?! >:v

  $(".music-info-box").hover(
    function() {
      if (winWidth >= 580) {
        var musicParent = $(this).closest(".music-section");
        musicParent.find(".cba1").show("slide", { direction: "left"}, 200 );
        musicParent.find(".cba2").show("slide", { direction: "right"}, 200 );
        musicParent.find(".cba3").show("slide", { direction: "down"}, 200 );
        musicParent.find(".cba4").show("slide", { direction: "up"}, 200 );
      }
    },
    function() {
      if(winWidth >= 580) {
        var musicParent = $(this).closest(".music-section");
        musicParent.find(".cba1").hide("slide", { direction: "left"}, 200 );
        musicParent.find(".cba2").hide("slide", { direction: "right"}, 200 );
        musicParent.find(".cba3").hide("slide", { direction: "down"}, 200 );
        musicParent.find(".cba4").hide("slide", { direction: "up"}, 200 );
      }
    }
  );

})
