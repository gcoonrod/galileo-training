(function() {

	var loadCSS = function (cssArray){
		for (var index in cssArray){
			var link = document.createElement("link");
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = cssArray[index];
			document.getElementsByTagName("head")[0].appendChild(link);
		}
	};

	var cssArray = [
		//Library & Plugin
		"css/bootstrap/css/bootstrap.css",
		"css/highlightjs/monokai_sublime.css",

		//User Defined
		"css/app.css"
	];

	loadCSS(cssArray);

	requirejs.config({
		baseUrl: "",
		paths: {
			//Libraries and Plugins
			"jquery": "lib/jquery/jquery-2.1.0",
			"angular": "lib/angularjs/angular",
			"bootstrap": "lib/bootstrap/js/bootstrap",
			"angular-route": "lib/angularjs/angular-route",
			"ui-bootstrap": "lib/angularjs/ui-bootstrap-tpls-0.10.0",
			"highlight": "lib/highlightjs/highlight.pack",
			"underscore": "lib/underscorejs/underscore", 

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
			"angular-route": ['angular'],
			"ui-bootstrap": ['bootstrap', 'angular'],
			"highligh": {
				exports: "hljs"
			}
		}
	});

	require(['config'], function (config) {});
})();

