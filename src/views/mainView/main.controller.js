(function(){
	angular.module('yogabrasilia').controller('MainController', ctrl);
	ctrl.$inject = ['$scope', '$state', '$auth', '$ionicSideMenuDelegate'];
	function ctrl($scope, $state, $auth, $ionicSideMenuDelegate){
		$ionicSideMenuDelegate.edgeDragThreshold(100);

		$scope.view = {
			title: 'Inicio'
		}

		$auth.validateUser()
		.then(function(user){
			console.log(user)
			$scope.user = user
		})
		// .catch(function(err){
		// 	$state.go('login.auth')
		// })
		}
})();