'use strict';
/**
 * Tabs Controller
 */
function TabsController ($scope)
{
	function _init()
	{
		$scope.homeNotifications = 3;
	};

	_init();
};

angular
	.module('app')
	.controller('TabsController', TabsController);
