(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.chat', {
			title: "Chat",
			url: '/chat/:chatId',
			views: {
				'main-window': {
					templateUrl: 'views/chatView.html',
					controller: 'ChatController'
				}
			}
		})
	}
})();