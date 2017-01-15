(function(){
	angular.module('yogabrasilia').controller('TabsController', ctrl)
	ctrl.$inject = ['$scope', '$state', '$timeout']
	function ctrl($scope, $state, $timeout){
		$scope.sliderOptions = {
			initialSlide: 1,
			preloadImages: true,
			touchReleaseOnEdges: true
		}

		$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
			$scope.s = data.slider;
			

			
		});


		// // Animate Tab indicator on "slide" change
		// $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
		// 	console.log(event)
		// 	switch(data.slider.activeIndex){
		// 		case 0:
		// 			// Timeout is used here to make the comand run inside angular digest cycle
		// 			$state.go('main.tabs.cards')
		// 			break;
		// 		case 1:
		// 			// Timeout is used here to make the comand run inside angular digest cycle
		// 			$state.go('main.tabs.publications')
		// 			break;
		// 		case 2:
		// 			$state.go('main.tabs.chats')
		// 			break;
		// 	}
		// });
	}
})();