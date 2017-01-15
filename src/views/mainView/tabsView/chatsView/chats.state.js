(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$stateProvider'];
	function command($stateProvider){
		$stateProvider.state('main.tabs.chats', {
			url: '/chats',
			views: {
				'tabs-window-chats': {
					templateUrl: 'views/chatsView.html',
					controller: 'ChatsController'
				}
			}
		})
	}
})();