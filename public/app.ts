var templates = angular.module('templates', []); // just to contain pre-compiled templates
var app = angular.module('app', ['ngRoute', 'toastr', 'templates']);

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

