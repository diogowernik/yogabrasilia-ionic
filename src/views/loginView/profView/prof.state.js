app.config(function($stateProvider){
	$stateProvider.state('login.prof', {
		url: '/prof',
		views: {
			'login-window': {
				templateUrl: 'views/profView.html',
				controller: 'ProfController'
			}
		}
	})
});