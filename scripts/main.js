requirejs.config({
	baseUrl: "",
	paths: {
		//Libraries and Plugins
		"jquery": "lib/jquery/jquery-2.1.0",
		"angular": "lib/angularjs/angular",
		"bootstrap": "lib/bootstrap/js/bootstrap",
		"angular-route": "lib/angularjs/angular-route", 

		//App Modules
		"app": "scripts/apps/app",
		"config": "scripts/config",
		"routes": "scripts/routers/routes",

		//Controllers
		"nav": "scripts/controllers/nav/nav", 
		"galileo.ctrl":  "scripts/controllers/galileo/galileo.ctrl"
	},
	shim: {
		"bootstrap": ['jquery'],
		"angular-route": ['angular']
	}
});

require(['config'], function (config) {});