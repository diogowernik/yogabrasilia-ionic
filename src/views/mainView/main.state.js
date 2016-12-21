app.config(function($stateProvider){
	$stateProvider.state('main', {
		url: '/main',
		abstract: true,
		templateUrl: 'views/mainView.html',
		controller: 'MainController'
	})
})