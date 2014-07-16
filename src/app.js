var L = require('leaflet'),
	$ = require('jquery'),
	_ = require('underscore');

require('angular');

var map = L.map('map', { center: [0,0], zoom: 2 });

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(pos) {
		map.setView(L.latLng(pos.coords.latitude, pos.coords.longitude), 15);
	});
}