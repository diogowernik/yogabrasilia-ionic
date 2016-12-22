app.factory('$publications', function($http, $auth){


	var get = function(){
		 return $http({
			'method': 'GET',
			'url': 'http://yoga.smartmarket.io/publications/from-subdomain/1.json'
		})
	}

	return {
		get: get
	}


})