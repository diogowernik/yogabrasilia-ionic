(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.tabs', {
			url: '/tabs',
			views: {
				'main-window': {
					templateUrl: 'views/tabsView.html',
					controller: 'TabsController',
					controllerAs: 'tabs'
				}
			},
			title: "Inicio"
		})
	}
})();