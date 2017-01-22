(function(){
	angular.module('yogabrasilia').controller('CreateController', ctrl)
	ctrl.$inject = ['$stateParams']
	function ctrl($stateParams){
		var data = this;
		data.type = $stateParams.type;
	}
})();