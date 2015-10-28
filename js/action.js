$(document).on("ready", function() {
  $(".icon").hover(
    function() {
      $(this).next().slideDown("fast");
    },
    function() {
      $(this).next().slideUp("fast");
    });
})
