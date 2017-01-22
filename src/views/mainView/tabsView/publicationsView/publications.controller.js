(function(){
	angular.module('yogabrasilia').controller('PublicationsController', ctrl)
	ctrl.$inject = ['$mock', "$scope"]
	function ctrl($mock, $scope){
		var data = this;
		data.pubs = $mock.get('pubs');

		data.doRefresh = function(){
			$scope.$broadcast('scroll.refreshComplete');
		}
		
		data.loadMore = function(){
			// $scope.$broadcast('scroll.infiniteScrollComplete');
		}
	}
})();