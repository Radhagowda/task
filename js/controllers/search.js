app.controller('searchController',['$scope','$http',function($scope,$http){
  

         $http.get('http://swapi.co/api/planets')
             .then(function(response){
             console.log(response.data);
             $scope.planetList = response.data.results ;
             
             })

             
}]);
