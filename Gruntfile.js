(function(undefined) {
	'use strict';

	module.exports = function(grunt) {

		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			concat: {
				options: {
					separator: ';',
					stripBanners: { block: true, line: true },
				},
				app: {
					dest: 'www/build/js/app.min.js',
					src: [
						'www/lib/angular/angular.min.js',
						'www/lib/angular-animate/angular-animate.min.js',
						'www/lib/angular-sanitize/angular-sanitize.min.js',
						'www/lib/angular-touch/angular-touch.min.js',
						'www/lib/angular-ui-router/release/angular-ui-router.min.js',
						'www/lib/ionic/js/ionic.min.js',
						'www/lib/ionic/js/ionic-angular.min.js',
						'www/lib/ngCordova/dist/ng-cordova.min.js',
						'www/lib/ngstorage/ngStorage.min.js',

						'www/app/app.js',
						'www/app/config.js',
						'www/app/constants.js',
						'www/app/routes.js',
						'www/app/run.js',

						'www/app/components/home/HomeController.js',
						'www/app/components/tabs/TabsController.js',
						'www/app/components/settings/SettingsController.js'
					]
				}
			},

			uglify: {
				app: {
					options: { mangle: false },
					files: {
						'www/build/js/app.min.js': ['www/build/js/app.min.js']
					}
				}
			},

			copy: {
				map: {
					files: [{
						expand: true,
						flatten: true,
						src: ['www/lib/**/*.map'],
						dest: 'www/build/js'
					}]
				},
				fonts: {
					files: [{
						expand: true,
						flatten: true,
						src: ['www/lib/ionic/fonts/**.*'],
						dest: 'www/build/fonts'
					}]
				}
			},

			concat_css: {
				options: {},
				app: {
					dest: 'www/build/css/app.min.css',
					src: [
						'www/lib/ionic/css/ionic.min.css',
						'www/css/app.css'
					]
				}
		  },

		  cssmin: {
		  	target: {
			    files: {
			      'www/build/css/app.min.css': ['www/build/css/app.min.css']
			    }
			  }
		  },

		  jshint: {
		  	all: ['Gruntfile.js', 'www/app/**/*.js']
		  },

			watch: {
				min: {
					files: ['Gruntfile.js', 'www/app/**/*.js', 'www/css/**/*.css'],
					tasks: ['concat:app', 'concat_css', 'jshint'],
					options: {
						atBegin: true
					}
				}
			}
		});

		grunt.registerTask('dev', ['concat', 'concat_css']);
		grunt.registerTask('default', ['concat', 'concat_css', 'cssmin', 'copy']);

		require('time-grunt')(grunt);
		require('jit-grunt')(grunt);
	};

})();
