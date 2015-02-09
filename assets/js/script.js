$(document).ready(function(){
	var i=2;
	 $('#addRest').on("click", function(){
				var base = $('#selectRest option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				var className = $('.current-day')[0].id;
				drawLocation(loc,{ icon: '/images/restaurant.png' }, className);
				
				var temp = $('<div class="itinerary-item '+className+'"></div>').append('<span class="title">'+name+'   </span><button class="btn btn-xs btn-danger remove btn-circle event-remove">x</button>');
				$('#rest-list').append(temp);
			});

	 $('#addHotel').on("click", function(){
				var base = $('#selectHotel option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				var className = $('.current-day')[0].id;
				drawLocation(loc,{ icon: '/images/lodging_0star.png' }, className);
				
				var temp = $('<div class="itinerary-item '+className+'"></div>').append('<span class="title">'+name+'   </span><button class="btn btn-xs btn-danger remove btn-circle event-remove">x</button>');
				$('#hotel-list').append(temp);
			});

	 $('#addTtd').on("click", function(){
				var base = $('#selectTtd option:selected');
				var loc = base.attr('data-place').split(',');
				var name = base[0].value;
				var className = $('.current-day')[0].id;
				drawLocation(loc,{ icon: '/images/star-3.png' }, className);
				
				var temp = $('<div class="itinerary-item '+className+'"></div>').append('<span class="title">'+name+'   </span><button class="btn btn-xs btn-danger remove btn-circle event-remove">x</button>');
				$('#ttd-list').append(temp);
			});

	function drawLocation (location, opts, id) {
			        if (typeof opts !== 'object') {
			            opts = {}
			        }
			        opts.position = new google.maps.LatLng(location[0], location[1]);
			        opts.map = map;
			        var marker = new google.maps.Marker(opts);
			        markers.push({id: id,
			        	marker: marker});
	}
    
	$('#new-day').on('click', function(){
		$('<button id="day-'+i+'" class="btn btn-circle day-btn days">'+i+'</button>').insertBefore('#new-day');
		i++;
		});

	$('.day-buttons').on("click", ".days", function(){
		var ident = $('.current-day')[0].id;
		console.log(ident);
		$('.'+ident).addClass('not-shown');//visible
		$('.current-day').removeClass('current-day');
		$(this).addClass('current-day');
		$('#disp-date').text('Day '+ $(this).text());
		var newId = $(".current-day")[0].id;

		console.log('.day-'+$(this).text());
		$('.day-'+$(this).text()).removeClass('not-shown');//visible
		markers.forEach(function(mark){
			if(mark.id === ident){
				console.log('removed a marker');
				mark.marker.setVisible(false);
			}
			if(mark.id === newId){
				console.log('added a marker');
				mark.marker.setVisible(true);
			}
		})

	})

	//Event removal
	$('.panel-body').on("click", ".event-remove", function(){
		console.log('clicked');
		$(this).parent().remove();
	})

	//Day removal
	$('.day-remove').on('click', function(){
		console.log('removal noted');
		//delete current day
		if(i === 2){
			alert('you dont have enough days');
		}
		else{
			
			var currId = $('.current-day')[0].id;
			var num = +$('.current-day').text();
			console.log(currId);
			$('.'+currId).remove();//remove events
			$('.current-day').remove();//remove class
			$('#disp-date').text('Day 1'); //redirect to day1
			$('#day-1').addClass('current-day');//make day1 current-day
			i--;
			console.log('I: ',i,"num: ", num);
			num=Number(num);
			while(i>num){
				console.log('here');
				numPlus=num+1;
				$('#day-'+numPlus).text(num);
				$('#day-'+numPlus)[0].id = 'day-'+num;
				$('.day-'+numPlus).removeClass('day-'+numPlus).addClass('day-'+num);
				num++;
			}
		}
		//delete all things during current day
		//if if subsequent days, reduce their date by one
		//reset current-day to day 1


	})




})