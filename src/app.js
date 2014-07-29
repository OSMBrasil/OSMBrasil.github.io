var L = require('leaflet'),
	$ = require('jquery'),
	_ = require('underscore');

require('angular');

var map = L.map('map', { center: [-16.38,-56.60], zoom: 3 });

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(pos) {
		map.setView(L.latLng(pos.coords.latitude, pos.coords.longitude), 15);
	});
}