(function(angular, undefined) {
	'use strict';

	/**
	 * Config Controller
	 */
	angular
		.module('app')
		.controller('SettingsController', SettingsController);

	SettingsController.$inject = ['$scope', '$localStorage'];

	function SettingsController($scope, $localStorage) {

		function _init() {
			$scope.$storage = $localStorage;
		}

		_init();
	}

})(window.angular);
