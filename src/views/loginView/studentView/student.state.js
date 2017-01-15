(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('login.student', {
			url: '/student',
			views: {
				'login-window': {
					templateUrl: 'views/studentView.html',
					controller: 'StudentController'
				}
			}
		})
	}
})();