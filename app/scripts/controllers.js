'use strict';
angular.module('confusionApp')
  .controller('IndexController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    //  $scope.dishes= menuFactory.getDishes();
    // $scope.dishes = [];
    $scope.dish = {};
    $scope.showDish = false;
    $scope.message = "Loading ...";
    $scope.dish = menuFactory.getDishes().get({
        id: 0
      })
      .$promise.then(
        function(response) {
          $scope.dish = response;
          $scope.showDish = true;
        },
        function(response) {
          $scope.message = "Error: " + response.status + " " + response.statusText;
        }
      );
    // menuFactory.getDish(0)
    //   .then(
    //     function(response) {
    //       $scope.dish = response.data;
    //       $scope.showDish = true;
    //     },
    //     function(response) {
    //       $scope.message = "Error: " + response.status + " " + response.statusText;
    //     }
    //   );

    //console.debug('ssssr');
  }])
  .controller('MenuController', ['$scope', 'menuFactory', '$timeout', function($scope, menuFactory, $timeout) {
    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    // $scope.dishes= menuFactory.getDishes();
    console.debug('aaa');
    $scope.showMenu = false;
    $scope.message = "Loading ...";
    menuFactory.getDishes().query(
      function(response) {
        $scope.dishes = response;
        $scope.showMenu = true;
      },
      function(response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
      });
    console.debug('dda');
    // $scope.dishes = [];
    // // var f;
    // // $timeout(function() {
    // menuFactory.getDishes()
    //   .then(
    //     function(response) {
    //       $scope.dishes = response.data;
    //       // for (var i = 0; i < 10; i++) {
    //       //   f=1;
    //       // };
    //       $scope.showMenu = true;
    //     },
    //     function(response) {
    //       $scope.message = "Error: " + response.status + " " + response.statusText;
    //     }
    //   );
    // // }, 3000);

    $scope.select = function(setTab) {
      $scope.tab = setTab;
      if (setTab === 2) {
        $scope.filtText = "appetizer";
      } else if (setTab === 3) {
        $scope.filtText = "mains";
      } else if (setTab === 4) {
        $scope.filtText = "dessert";
      } else {
        $scope.filtText = "";
      }
    };
    $scope.isSelected = function(checkTab) {
      return ($scope.tab === checkTab);
    };
    $scope.toggleDetails = function() {
      $scope.showDetails = !$scope.showDetails;
    };
  }])


.controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {
      mychannel: "",
      firstName: "",
      lastName: "",
      agree: false,
      email: ""
    };
    var channels = [{
      value: "tel",
      label: "Tel."
    }, {
      value: "Email",
      label: "Email"
    }];
    $scope.channels = channels;
    $scope.invalidChannelSelection = false;
  }])
  .controller('FeedbackController', ['$scope', function($scope) {
    $scope.sendFeedback = function() {
      console.log($scope.feedback);
      if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
        $scope.invalidChannelSelection = true;
        console.log('incorrect');
      } else {
        $scope.invalidChannelSelection = false;
        $scope.feedback = {
          mychannel: "",
          firstName: "",
          lastName: "",
          agree: false,
          email: ""
        };
        $scope.feedback.mychannel = "";

        $scope.feedbackForm.$setPristine();
        console.log($scope.feedback);
      }
    };
  }])
  .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory','$timeout',
  function($scope, $stateParams, menuFactory,$timeout) {
    // var dish= menuFactory.getDish(parseInt($stateParams.id,10));
    //             $scope.dish = dish;
    $scope.dish = {};
    $scope.showDish = false;
    $scope.message = "Loading ...";

    $scope.dish = menuFactory.getDishes().get({
        id: parseInt($stateParams.id, 10)
      })
      .$promise.then(
        function(response) {
          $scope.dish = response;
          $scope.showDish = true;
        },
        function(response) {
          $scope.message = "Error: " + response.status + " " + response.statusText;
        }
      );
    // Esto es para no tener que hacer lo de los comentarios en el diseño de la pantalla
    //$timeout(function() {
    //     $scope.mycomment = {
    //       rating: 5,
    //       comment: "",
    //       author: "",
    //       date: ""
    //     };
    //   $scope.mycomment.date = new Date().toISOString();
    //   $scope.mycomment = {
    //     rating: 5,
    //     comment: "Que plato más bueno!",
    //     author: "Roque",
    //     date: ""
    //   };
    //   $scope.dish.comments.push($scope.mycomment);
    //
    //   menuFactory.getDishes().update({
    //     id: $scope.dish.id
    //   }, $scope.dish);
    //     console.log('update with timeout fired')
    // }, 10);


    // menuFactory.getDish(parseInt($stateParams.id, 10))
    //   .then(
    //     function(response) {
    //       $scope.dish = response.data;
    //       $scope.showDish = true;
    //     },
    //     function(response) {
    //       $scope.message = "Error: " + response.status + " " + response.statusText;
    //     }
    //   );
  }])
  .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    // $scope.submitComment = function() {
    //   $scope.mycomment.date = new Date().toISOString();
    //   console.log($scope.mycomment);
    //   $scope.dish.comments.push($scope.mycomment);
    //
    //   menuFactory.getDishes().update({
    //     id: $scope.dish.id
    //   }, $scope.dish);
    //   $scope.commentForm.$setPristine();
    //   $scope.mycomment = {
    //     rating: 5,
    //     comment: "",
    //     author: "",
    //     date: ""
    //   };
    // }
  }]);
