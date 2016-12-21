app.controller('IntroController', function($scope, $state, $timeout){
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
		$state.go('login.' + dest )
	}
})