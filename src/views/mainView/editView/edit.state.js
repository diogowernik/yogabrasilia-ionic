app.config(function($stateProvider){
	$stateProvider.state('main.edit', {
		url: '/edit/:type/:id',
		views: {
			'main-window': {
				templateUrl: 'views/editView.html',
				controller: 'EditController'
			}
		}
	})
});