(function(){
	angular.module('yogabrasilia').controller('CallbackController', ctrl)
	ctrl.$inject = ['$state']
	function ctrl($state){
		var user = $state.params
	}
})();