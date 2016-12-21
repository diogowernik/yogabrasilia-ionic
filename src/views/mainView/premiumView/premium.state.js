app.config(function($stateProvider){
	$stateProvider.state('main.premium', {
		url: '/premium',
		views: {
			'main-window': {
				templateUrl: 'views/premiumView.html',
				controller: 'PremiumController'
			}
		}
	})
});