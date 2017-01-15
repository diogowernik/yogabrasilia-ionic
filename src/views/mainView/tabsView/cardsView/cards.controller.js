(function(){
	angular.module('yogabrasilia').controller('CardsController', ctrl)
	ctrl.$inject = ['$mock']
	function ctrl($mock){
		this.cards = $mock.get('cards');
	}
})();