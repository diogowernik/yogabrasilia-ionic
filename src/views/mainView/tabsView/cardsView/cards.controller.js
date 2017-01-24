(function(){
	angular.module('yogabrasilia').controller('CardsController', ctrl)
	ctrl.$inject = ['$mock', '$scope']
	function ctrl($mock, $scope){
		var data = this;
		data.cards = $mock.get('cards');

		data.doRefresh = function(){
			$scope.$broadcast('scroll.refreshComplete');
		}
		
		data.loadMore = function(){
			// $scope.$broadcast('scroll.infiniteScrollComplete');
		}

	}
})();