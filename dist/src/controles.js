//Agrega el selector de capas al mapa
L.control.layers(baseLayers, overlays).addTo(mapa);

L.control.coordinates({
	useDMS:true,
	labelTemplateLat:"S {y}",
	labelTemplateLng:"O {x}",
	useLatLngOrder:true
}).addTo(mapa);

L.control.scale({maxWidth: 200}).addTo(mapa);

$(".leaflet-control-layers-base").prepend("<b>Capa base</b>");
$(".leaflet-control-layers-overlays").prepend("<b>Superpuestas</b>");
$("#mapa").append('<div class="argenmapMapFooter leaflet-bottom leaflet-center"><a style="float:left;" target="_blank" href="https://www.ign.gob.ar/argenmap2/argenmap.jquery/docs"><img src="https://www.ign.gob.ar/argenmap2/argenmap.jquery/img/logoignsintexto-25px.png" style="height: 20px;"></a>');