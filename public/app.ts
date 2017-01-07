var app = angular.module('app', ['ngRoute', 'toastr']);

app.run([
    '$route', '$templateCache', '$http', (function ($route, $templateCache, $http) {
        var url;
        console.log(0)
        for (var i in $route.routes) {
          console.log(1)
            // if ($route.routes[i].preload) {
                if (url = $route.routes[i].templateUrl) {
                    $http.get(url, { cache: $templateCache });
                }
            // }
        }
    })
]);

app.run(function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(e, next, prev, err) {
    if(err === "AUTH_REQUIRED") {
      $location.path("/login");
    }
    if(err === 'NOT_AUTHORIZED') {
      $location.path("/home");
    }
  })
})

