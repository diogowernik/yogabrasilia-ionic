app.config(function($stateProvider){
	$stateProvider.state('login.callback', {
		url: '/callback',
		views: {
			'login-window': {
				templateUrl: 'views/authCallbackView.html',
				controller: 'CallbackController'
			}
		}
	})
});