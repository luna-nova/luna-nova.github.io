$(document).on("ready", function() {

  var randomHue = function() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  };

  function gayRainbow() {
    $(this).animate({ borderColor: randomHue() }, 'slow', function() {
    $(this).animate({ borderColor: randomHue() }, 'slow', gayRainbow);
    });
  }

  $("#profile-avatar").hover(gayRainbow, function(){
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
