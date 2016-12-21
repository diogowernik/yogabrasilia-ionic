app.config(function($stateProvider){
	$stateProvider.state('login.intro', {
		url: '/intro',
		views: {
			'login-window': {
				templateUrl: 'views/introView.html',
				controller: 'IntroController'
			}
		}
	})
});