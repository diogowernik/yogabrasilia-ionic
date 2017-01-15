(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('login.recover', {
			url: '/recover',
			views: {
				'login-window': {
					templateUrl: 'views/recoverView.html',
					controller: 'RecoverController'
				}
			}
		})
	}
})();