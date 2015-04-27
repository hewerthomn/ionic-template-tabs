'use strict';
/**
 * Route Config
 */
function routeConfig($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('tabs', {
			url: '/tabs',
			abstract: true,
			controller: 'TabsController',
			templateUrl: 'app/components/tabs/tabs.html'
		})
		.state('tabs.home', {
			url: '/home',
			views: {
				'tabs.home': {
					controller: 'HomeController',
					templateUrl: 'app/components/home/home.html'
				}
			}
		})
		.state('tabs.settings', {
			url: '/settings',
			views: {
				'tabs.settings': {
					controller: 'SettingsController',
					templateUrl: 'app/components/settings/settings.html'
				}
			}
		});

	$urlRouterProvider.otherwise('/tabs/home');
};

angular
	.module('app')
	.config(routeConfig);
