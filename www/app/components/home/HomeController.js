'use strict';
/*
 * Home Controller
 */
function HomeController($scope, $localStorage)
{
	function _init()
	{
		$scope.$storage  = $localStorage;
	};

	function _apply() { if(!$scope.$$phase) $scope.$apply(); };

	_init();
};

angular
	.module('app')
	.controller('HomeController', HomeController);
