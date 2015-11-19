(function(angular, undefined) {
	'use strict';

	/**
	 * App Config
	 */
	angular
		.module('app')
		.config(appConfig);

	appConfig.$inject = ['$provide', '$ionicConfigProvider'];

	function appConfig($provide, $ionicConfigProvider) {

		// $provide.decorator("$exceptionHandler", function ($delegate) {
		// 	return function (exception, cause) {
		// 	};
		// });

		// $ionicConfigProvider.tabs.position('bottom');
	}

})(window.angular);
