app.config(function($stateProvider){
	$stateProvider.state('main.tabs.cards', {
		url: '/cards',
		views: {
			'tabs-window-cards': {
				templateUrl: 'views/cardsView.html',
				controller: 'CardsController'
			}
		}
	})
});