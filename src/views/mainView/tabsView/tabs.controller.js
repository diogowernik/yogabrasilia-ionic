(function(){
	angular.module('yogabrasilia').controller('TabsController', ctrl)
	ctrl.$inject = ['$scope', '$state', '$timeout']
	function ctrl($scope, $state, $timeout){
		// Capture instance
		var tabs = this;

		// Startup the slider
		$scope.sliderOptions = {
			initialSlide: 1,
			preloadImages: true,
			touchReleaseOnEdges: true
		}


		$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
			tabs.slider = data.slider;
		});


		// Animate Tab indicator on "slide" change
		$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
			switch(tabs.slider.activeIndex){
				case 0:
					$('#tabs-indicator').animate({left: '0'}, 225)
					$('#fab').animate({bottom: '72px'}, 225)
					break;
				case 1:
					$('#tabs-indicator').animate({left: '33.3333%'}, 225)
					$('#fab').animate({bottom: '72px'}, 225)
					break;
				case 2:
					$('#tabs-indicator').animate({left: '66.6666%'}, 225)
					$('#fab').animate({bottom: '-72px'}, 225)
					break;
			}
		});

		tabs.go = function( where ){
			tabs.slider.slideTo(Number(where), 225)
		}

		tabs.create = function(){
			if(tabs.slider.activeIndex == 0){
				$state.go('main.create', {'type': "Card"})
			}
			else{
				$state.go('main.create', {'type': "Pub"})
			}
		}

	}
})();