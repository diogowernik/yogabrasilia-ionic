(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.card', {
			url: '/card/:cardId',
			views: {
				'main-window': {
					templateUrl: 'views/cardView.html',
					controller: 'CardController'
				}
			}
		})
	}
})();