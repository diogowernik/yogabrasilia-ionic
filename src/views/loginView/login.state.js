app.config(function($stateProvider){
	$stateProvider.state('login', {
		url: '/login',
		abstract: true,
		templateUrl: 'views/loginView.html',
		controller: 'LoginController'
	})
})