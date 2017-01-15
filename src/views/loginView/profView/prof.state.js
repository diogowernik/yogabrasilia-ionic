(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('login.prof', {
			url: '/prof',
			views: {
				'login-window': {
					templateUrl: 'views/profView.html',
					controller: 'ProfController'
				}
			}
		})
	}
})();