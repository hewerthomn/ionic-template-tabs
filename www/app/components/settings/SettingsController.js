'use strict';
/**
 * Config Controller
 */
function ConfigController($scope, $localStorage) {

	function _init()
	{
		$scope.$storage = $localStorage;
	};

	_init();
};

angular
	.module('app')
	.controller('ConfigController', ConfigController);