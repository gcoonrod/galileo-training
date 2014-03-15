module.exports = function(grunt){
	var LIVERELOAD_PORT = 35728;
	var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
	var livereloadMiddleware = function (connect, options){
		return [
			lrSnippet,
			connect.static(options.base),
			connect.directory(options.base)
		];
	};

	grunt.initConfig({
		connect: {
			client: {
				options: {
					port: 9001,
					hostname: 'localhost',
					base: '.',		//For Windows
					//base: '/Users/gcoonrod/dev/galileo-training/', //For Mac
					middleware: livereloadMiddleware 
				}
			}
		},

		watch: {
			client: {
				files: [
					'views/**/*',
					'css/**/*',
					'scripts/**/*',
					'test/**/*', 
					'index.html'
				],
				tasks: ['htmlhint'],
				options: {
					livereload:LIVERELOAD_PORT
				}
			}
		},

		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'id-unique': true,
					'style-disabled': true
				},
				src: [
					'views/**/*.html', 
					'index.html'
				]
			}
		},

		jshint: {
			options: {
				eqeqeq: true,
				browser: true,
				'-W099': true,
				'-W030': true,
				globals: {
					jQuery: true,
					devel: true,
					worker: true,
					angular: true
				}
			},
			files: {
				src: [
					'Gruntfile.js',
					'scripts/**/*.js',
					'test/**/*.js'
				]
			}
		}
	});



	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('server', ['build', 'connect:client', 'watch:client']);
	grunt.registerTask('build', ['htmlhint', 'jshint']);
};
