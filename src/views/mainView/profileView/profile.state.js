(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.profile', {
			title: "Perfil",
			url: '/profile/:id',
			views: {
				'main-window': {
					templateUrl: 'views/profileView.html',
					controller: 'ProfileController'
				}
			}
		})
	}
})();