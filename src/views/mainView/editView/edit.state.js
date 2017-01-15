(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.edit', {
			url: '/edit/:type/:id',
			views: {
				'main-window': {
					templateUrl: 'views/editView.html',
					controller: 'EditController'
				}
			}
		})
	}
})();