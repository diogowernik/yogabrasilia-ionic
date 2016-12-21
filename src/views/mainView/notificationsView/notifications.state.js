app.config(function($stateProvider){
	$stateProvider.state('main.notifications', {
		url: '/notifications',
		views: {
			'main-window': {
				templateUrl: 'views/notificationsView.html',
				controller: 'NotificationsController'
			}
		}
	})
});