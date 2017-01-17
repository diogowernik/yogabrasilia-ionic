(function(){
	angular.module('yogabrasilia').controller('MainController', ctrl);
	ctrl.$inject = ['$scope', '$state', '$auth', '$ionicSideMenuDelegate'];
	function ctrl($scope, $state, $auth, $ionicSideMenuDelegate){
		var main = this;

		$ionicSideMenuDelegate.edgeDragThreshold(100);

		main.title = 'Inicio';

		$scope.$on('$stateChangeStart', function(event, view){
			main.title = view.title;
			Waves.init({
				duration: 225
			});
		})

		Waves.init({
			duration: 225
		});
		
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