(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.publication', {
			title: "Publicações",
			url: '/publication/:pubId',
			views: {
				'main-window': {
					templateUrl: 'views/publicationView.html',
					controller: 'PublicationController'
				}
			}
		})
	}
})();