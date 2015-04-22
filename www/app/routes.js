'use strict';
/**
 * Route Config
 */
function routeConfig($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('about', {
			url: '/about',
			templateUrl: 'app/components/about/about.html'
		})
		.state('home', {
			url: '/home',
			controller: 'HomeController',
			templateUrl: 'app/components/home/home.html'
		})
		.state('settings', {
			url: '/settings',
			controller: 'ConfigController',
			templateUrl: 'app/components/settings/settings.html'
		});

	$urlRouterProvider.otherwise('home');
};

angular
	.module('app')
	.config(routeConfig);
