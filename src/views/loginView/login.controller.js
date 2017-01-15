(function(){
	angular.module('yogabrasilia').controller('LoginController', ctrl)
	ctrl.$inject = ['$state', '$auth']
	function ctrl($state, $auth){
		// $auth.destroyAccount()
		// If app instance is being created or re-created, try validationg the user
		$auth.validateUser()
		.then(function(user){
			$state.go('main.tabs.publications');
		})
		.catch(function(err){
			$state.go('login.intro')
		})
	}
})();