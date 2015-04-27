'use strict';
/**
 * Config Controller
 */
function SettingsController($scope, $localStorage) {

	function _init()
	{
		$scope.$storage = $localStorage;
	};

	_init();
};

angular
	.module('app')
	.controller('SettingsController', SettingsController);
