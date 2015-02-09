$(document).ready(function(){
	var i=2;
	 $('#addRest').on("click", function(){
				var base = $('#selectRest option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				drawLocation(loc,{ icon: '/images/restaurant.png' });
				var className = $('.current-day')[0].id;
				$('#rest-list').append('<div class="itinerary-item '+className+'"></div>').append('<span class="title">'+name+'   </span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
			});

	 $('#addHotel').on("click", function(){
				var base = $('#selectHotel option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				drawLocation(loc,{ icon: '/images/lodging_0star.png' });
				var className = $('.current-day')[0].id;
				$('#hotel-list').append('<div class="itinerary-item '+className+'"></div>').append('<span class="title">'+name+'   </span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
			});

	 $('#addTtd').on("click", function(){
				var base = $('#selectTtd option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				drawLocation(loc,{ icon: '/images/star-3.png' });
				var className = $('.current-day')[0].id;
				$('#ttd-list').append('<div class="itinerary-item '+className+'"></div>').append('<span class="title">'+name+'   </span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
			});

	function drawLocation (location, opts) {
			        if (typeof opts !== 'object') {
			            opts = {}
			        }
			        opts.position = new google.maps.LatLng(location[0], location[1]);
			        opts.map = map;
			        var marker = new google.maps.Marker(opts);
	}
    
	$('#new-day').on('click', function(){
		$('<button id="day-'+i+'" class="btn btn-circle day-btn days">'+i+'</button>').insertBefore('#new-day');
		i++;
		});
	})

	$('.day-buttons').on("click", ".days", function(){
		$('.current-day').removeClass('current-day');
		$(this).addClass('current-day');
		$('#disp-date').text('Day '+ $(this).text());


	})