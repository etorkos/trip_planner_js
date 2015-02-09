$(document).ready(function(){

	$('#addHotel').on("click", function(){
		var req = $('#selectHotel option:selected');
		var plus = req.data-place;
		console.log('direct approach: ', plus);

		var req = $('#selectHotel option:selected').data-place();
		console.log(req);
		// all_hotels_ref.forEach(function(inc, place){
		// 	if(place.name == req.name) {
		// 		console.log("success");
		// 	}
		// })
		console.log("info already on element ", req.place);

	});




	function drawLocation (location, opts) {
			        if (typeof opts !== 'object') {
			            opts = {}
			        }
			        opts.position = new google.maps.LatLng(location[0], location[1]);
			        opts.map = map;
			        var marker = new google.maps.Marker(opts);
	}
    drawLocation(hotelLocation, {
        icon: '/images/lodging_0star.png'
    });
    restaurantLocations.forEach(function (loc) {
        drawLocation(loc, {
            icon: '/images/restaurant.png'
        });
    });
    thingToDoLocations.forEach(function (loc) {
        drawLocation(loc, {
            icon: '/images/star-3.png'
        });
    });

})