var app = angular.module('yogabrasilia', ['ionic', 'ngCordova', 'ng-token-auth'])

app.run(function($ionicPlatform, $cordovaInAppBrowser){
	$ionicPlatform.ready(function(){
		// Make sure window.open opens inside the app ######## UNCOMENT BEFORE PRODUCTION ##############
		window.open = $cordovaInAppBrowser.open
	})
})


app.config(function($authProvider){
	// Setting up ng-token-auth
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
})

// Re Factorying the ionick clickblock to prevent ionic from delaying clicks when changing tabs
app.factory('$ionicClickBlock', function($document, $ionicBody, $timeout){
	return {
		show: function(){},
		hide: function(){}
	}
})