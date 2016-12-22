app.factory('$cards', function($http, $auth){


	var get = function(){
		 return $http({
			'method': 'GET',
			'url': 'http://yoga.smartmarket.io/cards/from-subdomain/1.json'
		})
	}

	return {
		get: get
	}


})