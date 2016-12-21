app.config(function($stateProvider){
	$stateProvider.state('login.recover', {
		url: '/recover',
		views: {
			'login-window': {
				templateUrl: 'views/recoverView.html',
				controller: 'RecoverController'
			}
		}
	})
});