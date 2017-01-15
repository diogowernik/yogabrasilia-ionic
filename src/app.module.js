(function(){
	angular.module('yogabrasilia', ['ionic', 'ngCordova', 'ng-token-auth', 'ipCookie'])
})();
// Setting up ng-token-auth
(function(){
	angular.module('yogabrasilia').config(command);
	command.$inject = ['$authProvider'];
	function command($authProvider){
		$authProvider.configure({
			apiUrl: 'http://smartmarket.io/api/v1',
			// Change to inAppBrowser before production
			omniauthWindowType: 'inAppBrowser',
			storage: 'localStorage',
			handleLoginResponse: function(res){ return res.data },
			handleAccountUpdateResponse: function(res){ return res.data },
			handleTokenValidationResponse: function(res){ return res.data },
			confirmationSuccessUrl: window.location.href
		});
	}
})();

// app.factory('$ionicClickBlock', function($document, $ionicBody, $timeout){
// 	return {
// 		show: function(){},
// 		hide: function(){}
// 	}
// })