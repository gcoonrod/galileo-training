define('routes', ['app', 'config', 'galileo.ctrl'], function (app){
	var routeConfig = app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/main.html', 
			controller: 'GalileoMainController'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);

	//Bootstrap the app
	angular.bootstrap(document, ['app']);

	return routeConfig;
});