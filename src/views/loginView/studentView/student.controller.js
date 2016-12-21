app.controller('StudentController', function($scope, $state){
	$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
		if(data.slider.activeIndex == 3){
			$state.go('login.auth')
		}
	});
})