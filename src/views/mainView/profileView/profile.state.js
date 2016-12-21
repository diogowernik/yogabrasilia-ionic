app.config(function($stateProvider){
	$stateProvider.state('main.profile', {
		url: '/profile/:id',
		views: {
			'main-window': {
				templateUrl: 'views/profileView.html',
				controller: 'ProfileController'
			}
		}
	})
});