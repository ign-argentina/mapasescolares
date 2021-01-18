// Mapa IGN nuevo (Arcgis Server)
var argenmap = L.tileLayer('https://ide.ign.gob.ar/geoservicios/rest/services/Mapas_IGN/mapa_topografico/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 18,
	attribution: '<a href="https://www.ign.gob.ar">Instituto Geográfico Nacional</a>' +
		' | &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
});

var satelital = L.gridLayer.googleMutant({
	type: 'satellite' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
});

var referenciasOsm = L.tileLayer.wms('https://wms.ign.gob.ar/geoserver/wms', {
	layers: 'ideign:referencias_osm_mapa_contacto',
	format: 'image/png',
	transparent: true,
	version: '1.1.0'
});

var overlays = {
	'Referencias': referenciasOsm
};

//Construye el mapa
var mapa = L.map('mapa', {
	center: [-34.5723, -58.4390],
	zoom: 16,
	layers:[argenmap, referenciasOsm]
	//,fullscreenControl: true
});

var baseLayers = {
	"Topográfico IGN": argenmap,
	"Satelital Google": satelital
};