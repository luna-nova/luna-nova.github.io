var music = angular.module("music", ["ngRoute"]);
music.controller("MusicController", function($scope) {

  //MUSIC PAGE: Color Block Focus Animation
  //TODO: A cleaner way to do this. I know there's some shortcut or something
  //that I don't know about. I'm new to JQuery, okay?! >:v

  $(".music-info-box").hover(
    function() {
      if ((window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth) >= 580) {
        var musicParent = $(this).closest(".music-section");
        musicParent.find(".cba1").show("slide", { direction: "left"}, 200 );
        musicParent.find(".cba2").show("slide", { direction: "right"}, 200 );
        musicParent.find(".cba3").show("slide", { direction: "down"}, 200 );
        musicParent.find(".cba4").show("slide", { direction: "up"}, 200 );
      }
    },
    function() {
      if((window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth) >= 580) {
        var musicParent = $(this).closest(".music-section");
        musicParent.find(".cba1").hide("slide", { direction: "left"}, 200 );
        musicParent.find(".cba2").hide("slide", { direction: "right"}, 200 );
        musicParent.find(".cba3").hide("slide", { direction: "down"}, 200 );
        musicParent.find(".cba4").hide("slide", { direction: "up"}, 200 );
      }
    }
  );
  
  $scope.$parent.whichPage("music");
})
