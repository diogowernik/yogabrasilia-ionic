(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.tabs.cards', {
			url: '/cards',
			views: {
				'tabs-window-cards': {
					templateUrl: 'views/cardsView.html',
					controller: 'CardsController'
				}
			}
		})
	}
})();