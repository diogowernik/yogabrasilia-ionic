(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider']
	function command($stateProvider){
		$stateProvider.state('main', {
			url: '/main',
			abstract: true,
			templateUrl: 'views/mainView.html',
			controller: 'MainController'
		})
	}
})();