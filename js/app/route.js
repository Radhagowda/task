app.config(
    ['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('/login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller:'loginController'
                })

                $stateProvider
                    .state('/search', {
                        url: '/search',
                        templateUrl: '/views/search.html',
                        controller:'searchController'
                    })
              }]);
