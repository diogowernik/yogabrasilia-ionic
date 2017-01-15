(function(){
	angular.module('yogabrasilia').controller('StudentController', ctrl)
	ctrl.$inject = ['$scope', '$state']
	function ctrl($scope, $state){
		$scope.canGoBack = false;
		$scope.canGoForward = true;

		$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
				$scope.slider = data.slider;
		});


		$scope.next = function(){
			$scope.slider.slideNext();
		}

		$scope.prev = function(){
			$scope.slider.slidePrev();
		}

		$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
			$scope.$apply(function(){
				switch(data.slider.activeIndex){
					case 0:
							$scope.canGoBack = false
							$scope.canGoForward = true
							break;
					case 1:
							$scope.canGoBack = true
							$scope.canGoForward = true
							break;
					case 2:
							$scope.canGoBack = true
							$scope.canGoForward = true
							break;
					case 3:
							$scope.canGoBack = true
							$scope.canGoForward = false
							break;
				}
			})
		});
	}
})();