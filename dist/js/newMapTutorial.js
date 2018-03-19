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

            map.addControl(zoomMenu);

            currentImageUrl = typeof imageUrl !== 'undefined' ? imageUrl :'http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar000_ArgentinaBicontinental_2000x2500.png';
            loadImage(currentImageUrl);

        // Load the drawControl script
        var drawControl   = document.createElement("script");
        drawControl.type  = "text/javascript";
        drawControl.src   = "../js/controlsAdd.js";    // use this for linked script
        document.body.appendChild(drawControl);

        // Load the printMap script
        var printControl   = document.createElement("script");
        printControl.type  = "text/javascript";
        printControl.src   = "../js/printMap.js";    // use this for linked script
        document.body.appendChild(printControl);

        // Removes the class trip-block
        $('.trip-block').remove();
        // Load the tutorial script
        var tutorialTrip   = document.createElement("script");
        tutorialTrip.type  = "text/javascript";
        tutorialTrip.src   = "../js/webTourMapaInteractivo.js";    // use this for linked script
        document.body.appendChild(tutorialTrip);

    }
    newMap();
    // archivo menu de mapas