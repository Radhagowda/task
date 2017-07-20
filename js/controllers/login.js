app.controller('loginController', ['$scope', '$state', '$http', function($scope, $state, $http) {

  $scope.data = {
        'name':'Luke Skywalker',
         'password':'19BBY'
      }
      $http.get('http://swapi.co/api/people')
          .then(function(response) {
              if (response.data) {
                  for (var i = 0; i < response.data.results.length; i++) {
                      if (($scope.data.name === response.data.results[i].name) && ($scope.data.password === response.data.results[i].birth_year)) {
                          $scope.CallPost = true;
                          $scope.myObj = response.data.results[i];

                      }
                  }
              }
          }, function(response) {
              console.log("get-error")
          });




      $scope.submit = function() {
          if ($scope.CallPost === true) {
              $http.post('http://swapi.co/api/people', $scope.data)
                  .then(function(response) {
                          if (response) {
                              $state.go('/search')
                          }
                      },

                      function(response) {
                          console.log("post-error")
                      });
          }
          else(alert("submit doesn't called"))

      }
  }]);