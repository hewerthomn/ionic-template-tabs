(function(angular, undefined) {
	'use strict';

	/**
	 * Tabs Controller
	 */
	angular
		.module('app')
		.controller('TabsController', TabsController);

	TabsController.$inject = ['$scope'];

	function TabsController ($scope) {

		function _init() {
			$scope.homeNotifications = 3;
		}

		_init();
	}

})(window.angular);
