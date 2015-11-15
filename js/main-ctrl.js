//ANGULAR ROUTING
//by Lunanova

var portfolio = angular.module("portfolio", ["ngRoute", "music", "home", "code"])
  .config(["$routeProvider", function ($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html",
      controller: "HomeController"
    })
    .when("/code", {
      templateUrl: "partials/code.html",
      controller: "CodeController"
    })
    .when("/music", {
      templateUrl: "partials/music.html",
      controller: "MusicController"
    });
  }]);

portfolio.controller("MainController", function($scope) {

  //Width variable for animation checking & event checker for screen resize
  $scope.winWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  //Function to reset width variable on resize
  $scope.widthChecker = function() {
    $scope.winWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  }
  //Utilizing the previous function
  $(window).on("resize", function() {
    $scope.widthChecker();

    if ($scope.winWidth < 580) {
      $(".text").stop().css({ display: "block" });
    } else {
      $(".text").stop().css({ display: "none" });
    }
  })

  //Selecting a random hue for color changing functions
  $scope.randomHue = function() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  };

  //Random color changing functions #supergay
  function gayRainbowBorder() {
    if($scope.winWidth > 580) {
      $(this).animate({ borderColor: $scope.randomHue() }, 'slow', function() {
      $(this).animate({ borderColor: $scope.randomHue() }, 'slow', gayRainbowBorder);
      });
    }
  }

  //SIDEBAR: Avatar color changing border
  $("#profile-avatar").hover(gayRainbowBorder, function() {
    if($scope.winWidth > 580) {
      $(this).animate({ borderColor: 'white' }, 'slow');
      $(this).stop();
    }
  });
  //If it is a mobile device
  $("#profile-avatar").on('click', function() {
    if($scope.winWidth < 580) {
      $(this).css({ borderColor: $scope.randomHue() });
    }
  })

  //SIDEBAR: Sliding link text
  $(".icon").hover(
    function() {
      if ($scope.winWidth > 580) {
        $(this).closest(".image-link").next().stop().slideDown("fast");
      }
    },
    function() {
      if ($scope.winWidth > 580) {
        $(this).closest(".image-link").next().stop().slideUp("fast");
      }
    }
  );

  //Check which page partial to set classes
  $scope.whichPage = function(page) {
    $("body").removeClass().addClass(page + "-background");
  }

});
