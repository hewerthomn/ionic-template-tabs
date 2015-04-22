'use strict';
/**
 * App Config
 */
function appConfig($provide, $ionicConfigProvider) {

	// $provide.decorator("$exceptionHandler", function ($delegate) {
	// 	return function (exception, cause) {
	// 	};
	// });

	$ionicConfigProvider.tabs.position('bottom');
};

angular
	.module('app')
	.config(appConfig);
