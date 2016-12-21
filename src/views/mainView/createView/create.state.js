app.config(function($stateProvider){
	$stateProvider.state('main.create', {
		url: '/create/:type/:id',
		views: {
			'main-window': {
				templateUrl: 'views/createView.html',
				controller: 'CreateController'
			}
		}
	})
});