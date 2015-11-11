var home = angular.module("home", ["ngRoute"]);
home.controller("HomeController", function($scope) {

  function gayRainbowText() {
    $(this).animate({ color: $scope.$parent.randomHue() }, 'slow', function() {
    $(this).animate({ color: $scope.$parent.randomHue() }, 'slow', gayRainbowText);
    });
  }

  $(".email-link").hover(gayRainbowText, function(){
    $(this).animate({ color: 'rgb(21, 52, 52)' }, 'slow');
    $(this).stop();
  });

  $scope.$parent.whichPage("home");
})
