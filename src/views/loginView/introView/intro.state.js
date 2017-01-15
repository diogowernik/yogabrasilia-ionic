(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('login.intro', {
			url: '/intro',
			views: {
				'login-window': {
					templateUrl: 'views/introView.html',
					controller: 'IntroController'
				}
			}
		})
	}
})();