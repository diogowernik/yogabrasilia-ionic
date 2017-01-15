(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.create', {
			url: '/create/:type/:id',
			views: {
				'main-window': {
					templateUrl: 'views/createView.html',
					controller: 'CreateController'
				}
			}
		})
	}
})();