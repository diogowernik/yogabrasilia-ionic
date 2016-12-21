app.config(function($stateProvider){
	$stateProvider.state('main.card', {
		url: '/card/:cardId',
		views: {
			'main-window': {
				templateUrl: 'views/cardView.html',
				controller: 'CardController'
			}
		}
	})
});