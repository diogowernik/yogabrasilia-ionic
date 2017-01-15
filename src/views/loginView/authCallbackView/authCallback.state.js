(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('login.callback', {
			url: '/callback',
			views: {
				'login-window': {
					templateUrl: 'views/authCallbackView.html',
					controller: 'CallbackController'
				}
			}
		})
	}
})();