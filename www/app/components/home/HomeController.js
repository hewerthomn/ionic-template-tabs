(function(angular, undefined) {
	'use strict';

	/*
	 * Home Controller
	 */
	angular
		.module('app')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', '$localStorage'];

	function HomeController($scope, $localStorage) {

		function _init() {
			$scope.$storage  = $localStorage;
		}

		_init();
	}

})(window.angular);
