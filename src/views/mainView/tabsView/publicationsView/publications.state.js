app.config(function($stateProvider){
	$stateProvider.state('main.tabs.publications', {
		url: '/publications',
		views: {
			'tabs-window-publications': {
				templateUrl: 'views/publicationsView.html',
				controller: 'PublicationsController'
			}
		}
	})
});