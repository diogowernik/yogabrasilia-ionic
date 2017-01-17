(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.premium', {
			title: "Premium",
			url: '/premium',
			views: {
				'main-window': {
					templateUrl: 'views/premiumView.html',
					controller: 'PremiumController'
				}
			}
		})
	}
})();