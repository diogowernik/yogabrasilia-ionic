(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.notifications', {
			url: '/notifications',
			views: {
				'main-window': {
					templateUrl: 'views/notificationsView.html',
					controller: 'NotificationsController'
				}
			}
		})
	}
})();