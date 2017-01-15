(function(){
	angular.module('yogabrasilia').service('$mock', mock)
	mock.$inject = [];
	function mock(){
		var cards = [{
			"title": "Yoga Para Crianças",
			"content": "Nam cursus magna in suscipit efficitur. Fusce fermentum consectetur vestibulum. Nulla mattis nisi porttitor leo pretium efficitur. Aliquam vitae tincidunt lacus. Maecenas viverra lacinia metus vel congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare, est nec tempor elementum, velit neque efficitur metus, ac fringilla metus sapien in ipsum. Phasellus tincidunt leo in pharetra tristique. Integer quis volutpat risus. In vel arcu vulputate, suscipit justo eget, bibendum tortor. Nam laoreet dui vel tempor vestibulum. Aenean quis elit quis mauris rutrum molestie a sed justo. Aenean aliquet porttitor lectus, vitae facilisis massa placerat tristique. Donec at enim condimentum, vehicula tortor vel, euismod justo. Praesent id auctor velit.",
			"date": "21/12/2016",
			"image": "http://lorempixel.com/output/city-q-c-500-500-10.jpg",
			"user": {
				"name": "Camila Oliveira",
				"avatar": "http://lorempixel.com/output/people-q-c-500-500-9.jpg"
			}
		},{
			"title": "Comemocação Lorem",
			"content": "Nam cursus magna in suscipit efficitur. Fusce fermentum consectetur vestibulum. Nulla mattis nisi porttitor leo pretium efficitur. Aliquam vitae tincidunt lacus. Maecenas viverra lacinia metus vel congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare, est nec tempor elementum, velit neque efficitur metus, ac fringilla metus sapien in ipsum. Phasellus tincidunt leo in pharetra tristique. Integer quis volutpat risus. In vel arcu vulputate, suscipit justo eget, bibendum tortor. Nam laoreet dui vel tempor vestibulum. Aenean quis elit quis mauris rutrum molestie a sed justo. Aenean aliquet porttitor lectus, vitae facilisis massa placerat tristique. Donec at enim condimentum, vehicula tortor vel, euismod justo. Praesent id auctor velit.",
			"date": "26/01/2017",
			"image": "http://lorempixel.com/output/city-q-c-500-500-8.jpg",
			"user": {
				"name": "Mateus Silva",
				"avatar": "http://lorempixel.com/output/people-q-c-500-500-3.jpg"
			}
		},{
			"title": "Aulas Experimentais",
			"content": "Nam cursus magna in suscipit efficitur. Fusce fermentum consectetur vestibulum. Nulla mattis nisi porttitor leo pretium efficitur. Aliquam vitae tincidunt lacus. Maecenas viverra lacinia metus vel congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare, est nec tempor elementum, velit neque efficitur metus, ac fringilla metus sapien in ipsum. Phasellus tincidunt leo in pharetra tristique. Integer quis volutpat risus. In vel arcu vulputate, suscipit justo eget, bibendum tortor. Nam laoreet dui vel tempor vestibulum. Aenean quis elit quis mauris rutrum molestie a sed justo. Aenean aliquet porttitor lectus, vitae facilisis massa placerat tristique. Donec at enim condimentum, vehicula tortor vel, euismod justo. Praesent id auctor velit.",
			"date": "27/02/2017",
			"image": "http://lorempixel.com/output/city-q-c-500-500-7.jpg",
			"user": {
				"name": "Diogo Carvalho",
				"avatar": "http://lorempixel.com/output/people-q-c-500-500-8.jpg"
			}
		}]

		var pubs = [{
			"title": "Yoga Para Crianças",
			"content": "Nam cursus magna in suscipit efficitur. Fusce fermentum consectetur vestibulum. Nulla mattis nisi porttitor leo pretium efficitur. Aliquam vitae tincidunt lacus. Maecenas viverra lacinia metus vel congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare, est nec tempor elementum, velit neque efficitur metus, ac fringilla metus sapien in ipsum. Phasellus tincidunt leo in pharetra tristique. Integer quis volutpat risus. In vel arcu vulputate, suscipit justo eget, bibendum tortor. Nam laoreet dui vel tempor vestibulum. Aenean quis elit quis mauris rutrum molestie a sed justo. Aenean aliquet porttitor lectus, vitae facilisis massa placerat tristique. Donec at enim condimentum, vehicula tortor vel, euismod justo. Praesent id auctor velit.",
			"date": "14/12/2016",
			"image": "http://lorempixel.com/output/city-q-c-500-500-10.jpg",
			"user": {
				"name": "Camila Oliveira",
				"avatar": "http://lorempixel.com/output/people-q-c-500-500-9.jpg"
			}
		},{
			"title": "Comemocação Lorem",
			"content": "Nam cursus magna in suscipit efficitur. Fusce fermentum consectetur vestibulum. Nulla mattis nisi porttitor leo pretium efficitur. Aliquam vitae tincidunt lacus. Maecenas viverra lacinia metus vel congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare, est nec tempor elementum, velit neque efficitur metus, ac fringilla metus sapien in ipsum. Phasellus tincidunt leo in pharetra tristique. Integer quis volutpat risus. In vel arcu vulputate, suscipit justo eget, bibendum tortor. Nam laoreet dui vel tempor vestibulum. Aenean quis elit quis mauris rutrum molestie a sed justo. Aenean aliquet porttitor lectus, vitae facilisis massa placerat tristique. Donec at enim condimentum, vehicula tortor vel, euismod justo. Praesent id auctor velit.",
			"date": "06/01/2017",
			"image": "http://lorempixel.com/output/city-q-c-500-500-8.jpg",
			"user": {
				"name": "Mateus Silva",
				"avatar": "http://lorempixel.com/output/people-q-c-500-500-3.jpg"
			}
		},{
			"title": "Aulas Experimentais",
			"content": "Nam cursus magna in suscipit efficitur. Fusce fermentum consectetur vestibulum. Nulla mattis nisi porttitor leo pretium efficitur. Aliquam vitae tincidunt lacus. Maecenas viverra lacinia metus vel congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare, est nec tempor elementum, velit neque efficitur metus, ac fringilla metus sapien in ipsum. Phasellus tincidunt leo in pharetra tristique. Integer quis volutpat risus. In vel arcu vulputate, suscipit justo eget, bibendum tortor. Nam laoreet dui vel tempor vestibulum. Aenean quis elit quis mauris rutrum molestie a sed justo. Aenean aliquet porttitor lectus, vitae facilisis massa placerat tristique. Donec at enim condimentum, vehicula tortor vel, euismod justo. Praesent id auctor velit.",
			"date": "11/02/2017",
			"image": "http://lorempixel.com/output/city-q-c-500-500-7.jpg",
			"user": {
				"name": "Diogo Carvalho",
				"avatar": "http://lorempixel.com/output/people-q-c-500-500-8.jpg"
			}
		}]


		this.get = function( what ){
			switch(what){
				case 'cards':
					return cards
					break;
				case 'pubs':
					return pubs
					break;
			}
		}
	}
})();