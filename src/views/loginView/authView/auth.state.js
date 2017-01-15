(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('login.auth', {
			url: '/auth',
			views: {
				'login-window': {
					templateUrl: 'views/authView.html',
					controller: 'AuthController'
				}
			}
		})
	}
})();