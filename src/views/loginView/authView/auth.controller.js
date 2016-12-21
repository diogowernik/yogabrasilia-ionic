app.controller('AuthController', function($scope, $timeout, $auth, $state){

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


	// oAuth login Flow
	$scope.oauthLogin = function( provider ){
		$auth.authenticate(provider)
		.then(function(user){
			console.log(user)
			$state.go('main.tabs.publications')
		})
		.catch(function(err){
			console.log(err)
		})
	}
})