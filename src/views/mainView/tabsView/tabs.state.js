app.config(function($stateProvider){
	$stateProvider.state('main.tabs', {
		url: '/tabs',
		abstract: true,
		views: {
			'main-window': {
				templateUrl: 'views/tabsView.html',
				controller: 'TabsController'
			}
		}
	})
});