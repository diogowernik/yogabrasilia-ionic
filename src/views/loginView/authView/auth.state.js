app.config(function($stateProvider){
	$stateProvider.state('login.auth', {
		url: '/auth',
		views: {
			'login-window': {
				templateUrl: 'views/authView.html',
				controller: 'AuthController'
			}
		}
	})
});