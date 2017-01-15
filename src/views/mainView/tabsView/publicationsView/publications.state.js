(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.tabs.publications', {
			url: '/publications',
			views: {
				'tabs-window-publications': {
					templateUrl: 'views/publicationsView.html',
					controller: 'PublicationsController'
				}
			}
		})
	}
})();