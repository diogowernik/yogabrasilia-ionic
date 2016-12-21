app.config(function($stateProvider){
	$stateProvider.state('main.publication', {
		url: '/publication/:pubId',
		views: {
			'main-window': {
				templateUrl: 'views/publicationView.html',
				controller: 'PublicationController'
			}
		}
	})
});