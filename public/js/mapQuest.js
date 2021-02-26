function initMap() {
	L.mapquest.key = "zShEeE1KeaYAuA5tZeXO7iw1SZClhOgf";

	//'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}