app.controller('ProfController', function($scope, $state){
	$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
		if(data.slider.activeIndex == 3){
			$state.go('login.auth')
		}
	});
})