app.controller('AuthController', function($scope, $timeout, $auth, $state, ipCookie, $ionicModal){
	// Init Scope slider
	$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
		// data.slider is the instance of Swiper (Slider)
		$scope.s = data.slider;

		// // Animate Tab indicator on "slide" change
		$scope.s.on('progress', function(swiper, progress){
			$('#auth-page-indicator').css({left:  50 * progress + '%'});
		})
	});


	// Go To slide function
	$scope.goToSlide = function( dest ){
		$scope.s.slideTo(dest)
	}

	// Email Login Flow
	$ionicModal.fromTemplateUrl('views/emailModal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	})
	.then(function( modal ){
		$scope.eModal = modal;
	})

	$scope.openEmailFlow = function( flow ){
		if(flow == 0){
			$scope.emailLogin = true;
		}
		else{
			$scope.emailLogin = false;
		}

		$scope.eModal.show();
	}

	$scope.closeEmailFlow = function(){
		$scope.eModal.hide();
	}

	$scope.$on('$destroy', function(){
		$scope.eModal.remove();
	})

	$scope.doEmailLogin = function(){
		$auth.submitLogin($scope.emailData)
		.then(function( user ){
			console.log(user)
			// On sucess login, set the user type on the server
			// $auth.changeUser( 'user_type': ipCookie('user_type') )
			$state.go('main.tabs.publications')
		})
		.catch(function( err ){
			console.log(err)
		})
	}




	// oAuth login Flow
	$scope.oauthLogin = function( provider ){
		$auth.authenticate(provider)
		.then(function(user){
			console.log(user)
			// On sucess login, set the user type on the server
			// $auth.changeUser( 'user_type': ipCookie('user_type') )
			$state.go('main.tabs.publications')
		})
		.catch(function(err){
			console.log(err)
		})
	}
})