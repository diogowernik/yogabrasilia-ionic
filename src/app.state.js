(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$urlRouterProvider']
	function command($urlRouterProvider){
		$urlRouterProvider.otherwise('/login/intro');
	}
})();