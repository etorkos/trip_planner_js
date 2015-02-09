$(document).ready(function(){
	 $('#addRest').on("click", function(){
	 		console.log('got to restaurant section');
				var base = $('#selectRest option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				console.log(base);
				drawLocation(loc,{ icon: '/images/restaurant.png' });
				$('#rest-list').append('<div class="itinerary-item"></div>').append('<span class="title">'+name+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
			});

	 $('#addHotel').on("click", function(){
	 		console.log('got to hotel section');
				var base = $('#selectHotel option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				console.log(base);
				drawLocation(loc,{ icon: '/images/lodging_0star.png' });
				$('#hotel-list').append('<div class="itinerary-item"></div>').append('<span class="title">'+name+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
			});

	 $('#addTtd').on("click", function(){
	 	console.log('got to ttd section');
				var base = $('#selectTtd option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				console.log(base);
				drawLocation(loc,{ icon: '/images/star-3.png' });
				$('#ttd-list').append('<div class="itinerary-item"></div>').append('<span class="title">'+name+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
			});

	function drawLocation (location, opts) {
			        if (typeof opts !== 'object') {
			            opts = {}
			        }
			        opts.position = new google.maps.LatLng(location[0], location[1]);
			        opts.map = map;
			        var marker = new google.maps.Marker(opts);
	}
    
})