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
    $(this).next().slideDown("fast");
  },
  function() {
    $(this).next().slideUp("fast");
  });


})
