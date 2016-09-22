var app = angular.module('app', ['ngRoute', "ngCookies"]);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'partials/main.html',
		controller: 'indexController'
	});
	$routeProvider.when('/messages',{
		templateUrl: 'partials/messages.html',
		controller: 'messageController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});