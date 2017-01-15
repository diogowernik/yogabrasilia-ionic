(function(){
	angular.module('yogabrasilia').controller('IntroController', ctrl)
	ctrl.$inject = ['$scope', '$state', '$timeout', 'ipCookie']
	function ctrl($scope, $state, $timeout, ipCookie){
		$timeout(function(){
			$('#login-logo-holder').css({
					'-webkit-transform': 'scale(1)',
					'-moz-transform': 'scale(1)',
					'-ms-transform': 'scale(1)',
					'-o-transform': 'scale(1)',
					'transform': 'scale(1)',
					'opacity': 1
				})
		}, 365)

		$timeout(function(){
			$('#login-user-type-select-holder').animate({'opacity': 1}, 225, 'swing')
		}, 550)


		$scope.go = function( dest ){
			var destiny = String(dest);
			ipCookie('user_type', destiny)
			$state.go('login.' + destiny )
		}
	}
})();