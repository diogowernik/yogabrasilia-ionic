app.config(function($stateProvider){
	$stateProvider.state('main.chat', {
		url: '/chat/:chatId',
		views: {
			'main-window': {
				templateUrl: 'views/chatView.html',
				controller: 'ChatController'
			}
		}
	})
});