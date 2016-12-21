app.controller('MainController', function($scope, $state, $auth, $ionicSideMenuDelegate){
	$ionicSideMenuDelegate.edgeDragThreshold(100);

	$scope.view = {
		title: 'Inicio'
	}

	$auth.validateUser()
	.then(function(user){
		console.log(user)
		$scope.user = user
	})
	.catch(function(err){
		$state.go('login.auth')
	})
})