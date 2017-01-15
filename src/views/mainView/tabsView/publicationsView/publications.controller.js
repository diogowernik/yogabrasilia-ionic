(function(){
	angular.module('yogabrasilia').controller('PublicationsController', ctrl)
	ctrl.$inject = ['$mock']
	function ctrl($mock){
		this.pubs = $mock.get('pubs');
	}
})();