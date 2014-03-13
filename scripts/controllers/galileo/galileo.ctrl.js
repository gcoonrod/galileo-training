define('galileo.ctrl', ['app', 'config', 'nav'], function (app, config){
	app.controller('GalileoMainController', ['$scope', '$location', '$routeParams', '$rootScope', function ($scope, $location, $routeParams, $rootScope) {
		$scope.howdy = "Howdy!";
	}]);
})