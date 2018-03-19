    // Archivo newmap.js
    var minzoom = 5; var zoom = 5;
    var $window = $(window);

    if ($window.height() < 1024 &&  $window.height() >= 925) {
        minzoom = 4.9;
        zoom = 4.9;
    }
    else if ($window.height() < 924 &&  $window.height() > 825) {
        minzoom = 4.8;
        zoom = 4.8;
    }

    else if ($window.height() <= 824 &&  $window.height() >= 768) {
        minzoom = 4.65;
        zoom = 4.65;
    }

    else if ($window.width() > 850 && $window.height() < 767   && $window.height() >= 676 ) {

        minzoom = 4.45;
        zoom = 4.45;
        }

    else if ($window.height() < 676 ) {
        minzoom = 4.275;
        zoom = 4.275;
        };

    function newMap(imageUrl){
        // Crear el Mapa con menu zoom personalizado
        var zoomMenu = L.control.zoom({zoomInTitle:'Acercarse', zoomOutTitle:'Alejarse'});
        map = L.map('map', {
            maxZoom: 8,
            minZoom: minzoom,
            zoomControl: false,
            crs: L.CRS.Simple
        }).setView([0, 0], zoom);

        map.initialZoom = map.getZoom();
        map.addControl(zoomMenu);

        currentImageUrl = typeof imageUrl !== 'undefined' ? imageUrl :'http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar000_ArgentinaBicontinental_2000x2500.png';
        loadImage(currentImageUrl);
        /*
        // Load the drawControl script
        var drawControl   = document.createElement("script");
        drawControl.type  = "text/javascript";
        drawControl.src   = "../js/controlsAdd.js";    // use this for linked script
        document.body.appendChild(drawControl);
        */

        // Agrega los controles de linea, poligono, etc        
        var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);

        illustrateControl = new L.Illustrate.Control({
            draw: {
                textbox: {
                    textboxTooltipEnd: "Presioná y luego arrastrá para dibujar un rectángulo de texto"
                },
                illustrate: {
                    cancelTxt: "Cancelar",
                    cancelTitleTxt: "Cancelar rectángulo de texto",
                    textboxTitle: "Agregá texto"
                },
            },
            
            edit: {
                featureGroup: drawnItems
            },
            secondToolbar: {}
        });
                            
        var drawControl = new L.Control.Draw({
            draw: {
                illustrateToolbar: {},
                position: 'topleft',
                polygon: {
                    allowIntersection: false,
                    drawError: {
                        color: '#b00b00',
                        timeout: 1000
                    },
                    shapeOptions: {
                        color: '#bada55'
                    },
                    showArea: true,
                    metric: true,
                    title: "Dibujá polígonos",
                    polygonTooltipStart: "Clickeá y comenzá a dibujar polígonos",
                    polygonTooltipCont: "Clickeá para continuar dibujando el polígono",
                    polygonTooltipEnd: "Clickeá en el primer punto para terminar el polígono",
                    polygonTooltipError: "<strong>Error:</strong> Los bordes de la figura no se pueden cruzar!",
                },
                polyline: {
                    title: "Dibujá líneas",
                    polylineTooltipStart: "Clickeá para comenzar a dibujar",
                    polylineTooltipCont: "Presioná el botón izquierdo y terminá el segmento",
                    polylineTooltipEnd: "Clickeá en el último punto para finalizar el dibujo",
                    metric: true
                },
                rectangle: {
                    shapeOptions: {
                        color: '#e67e22'
                    },
                    title: "Dibujá rectángulos",
                    rectangleTooltipEnd: "Clickeá y arrastrá para dibujar rectángulos",
                    tooltipEnd: "Soltá el botón del mouse para terminar de dibujar"
                },
                circle: {
                    shapeOptions: {
                        color: '#662d91'
                    },
                    metric: true,
                    title: "Dibujá círculos",
                    circleTooltipStart: "Clickeá y arrastrá para dibujar círculos",
                    tooltipEnd: "Soltá el botón del mouse para terminar de dibujar",
                    radius: "Radio: "
                },
                marker: {
                    title: "Insertá marcadores",
                    markerTooltipStart: "Clickeá para insertar marcadores"
                },
                draw: {
                    toolbar_undo_text: "Borrá el último punto",
                    toolbar_undo_title: "Borrá el último punto",
                    toolbar_actions_text: "Cancelar",
                    toolbar_actions_title: "Cancelar dibujo",
                },
            },
            edit: {
                featureGroup: drawnItems,
                editTxt: "Editá tus objetos",
                editDisabledTxt: "No hay objetos para editar",
                removeTxt: "Eliminá objetos",
                removeDisabledTxt: "No hay objetos para borrar",
                deleteTxt: "Hacé click en el objeto que desees eliminar",
                saveTxt: "Guardar",
                saveTitleTxt: "Guardar cambios",
                cancelTxt: "Cancelar",
                cancelTitleTxt: "Cancelar la edición, eliminar los cambios",
                editShapeTxt:"Arrastrá las esquinas o los centros de los objetos para editarlos",
                editShapeSubtextTxt: "Clickeá en cancelar para que no se apliquen los cambios",         
            }
        });

        map.on('draw:created', function (e) {
            var type = e.layerType,
                layer = e.layer;

            if (type === 'marker') {
                var result = prompt("Ingresa el nombre del marcador");
                layer.bindLabel( result, { noHide: true })
                    .addTo(map)
                    .showLabel();                                                               
            }
            drawnItems.addLayer(layer);
        });

        // Seteo los nombres de los toolbar para poder desahabilitarlos desde script
        illustrateControl.secondToolbar = drawControl;

        drawControl.illustrateToolbar = illustrateControl;

        map.addControl(illustrateControl);

        map.addControl(drawControl);

        var printControl = L.browserPrint({
        title: '',
        position: 'topleft',
        printModes: ["Auto"],
        printModesNames: {Auto:"Imprmir"}
        }).addTo(map);

        // Load the printMap script
        var printControlScript   = document.createElement("script");
        printControlScript.type  = "text/javascript";
        printControlScript.src   = "../js/printMap.js";    // use this for linked script
        document.body.appendChild(printControlScript);

        map.on('pre-print', function() {sizePolygon.setStyle({stroke: true});})
        map.on('browser-print-end', function() {sizePolygon.setStyle({stroke: false}); postPrint();})

        L.easyButton( 'fa-print', function(){
          showPrintDialog();
        }).addTo(map);

        //Set zoom to display full map
        //map.fitBounds(sizePolygon.getBounds());
}
newMap();


// archivo menu de mapas