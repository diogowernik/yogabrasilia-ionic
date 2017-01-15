(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider']
	function command($stateProvider){
		$stateProvider.state('login', {
			url: '/login',
			abstract: true,
			templateUrl: 'views/loginView.html',
			controller: 'LoginController'
		})
	}
})();