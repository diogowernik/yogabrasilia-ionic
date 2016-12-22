app.factory('$chats', function($http, $auth){

	// 
	var get = function(){
		 return 'Hello from chat"s function!';
	}

	return {
		get: get
	}


})