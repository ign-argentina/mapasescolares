// Website tour https://eragonj.github.io/Trip.js/
/*    var $tourcontrols  = '<div id="tourcontrols" class="tourcontrols">';
                $tourcontrols += '<p>¿Desea realizar un tour de la herramienta?</p>';
                $tourcontrols += '<span class="button" id="activatetour">Si</span> <span class="button" id="dismisstour">No, gracias</span>';
                $tourcontrols += '</div>';
                
                $('BODY').prepend($tourcontrols);
                $('#tourcontrols').animate({'right':'30px'},500);
*/    
                var options = {
                      showNavigation : true,
                      showCloseBox : true,
                      delay : -1,
                      onEnd : function() {
                        window.location.href='mapaInteractivo.html';
                      },                      
                    }; 
                var trip = new Trip([
                { 
                   sel : $('.tour_1'),
                   content : 'Seleccioná la provincia con la que quieras trabajar',
                   position: 'w',
                   animation: 'rotateInUpLeft',
               },
                {
                   sel : $('.leaflet-control-zoom'),
                   content : 'Zoom sobre el mapa',
                   position : 'e',
                   animation: 'fadeIn'
                },
               {
                   sel : $('.leaflet-illustrate-create-textbox'),
                   content : "Agregá texto en el mapa manteniendo presionado el botón izquierdo y arrastrando el mouse hasta formar el área que desees. Después hace click en el área creada y comenzá a escribir",
                   position : 'e',
                   animation: 'fadeInRight'
                },
               {
                   sel : $('.leaflet-draw-draw-polyline'),
                   content : 'Dibujá lineas',
                   position : 'e',
                   animation: 'fadeInRight'
                },          
               {
                   sel : $('.leaflet-draw-draw-polygon'),
                   content : 'Dibujá polígonos',
                   position : 'e',
                   animation: 'fadeInRight'
                },
               {
                   sel : $('.leaflet-draw-draw-rectangle'),
                   content : 'Dibujá rectángulos manteniendo presionado el botón izquierdo y arrastrando el mouse hasta que formes el área deseada',
                   position : 'e',
                   animation: 'fadeIn'
                },
               {
                   sel : $('.leaflet-draw-draw-circle'),
                   content : 'Dibujá círculos manteniendo presionado el botón izquierdo y arrastrando el mouse hasta lograr el tamaño que desees',
                   position : 'e',
                   animation: 'fadeInRight'
                },
               {
                   sel : $('.leaflet-draw-draw-marker'),
                   content : 'Agregá un marcador e insertá una etiqueta',
                   position : 'e',
                   animation: 'fadeIn'
                   //animation: 'rotateInUpRight'
                },          
               {
                   sel : $('.leaflet-draw-edit-edit'),
                   content : 'Modificá tu mapa',
                   position : 'e',
                   animation: 'fadeIn'
                },                        
               {
                   sel : $('.leaflet-draw-edit-remove'),
                   content : 'Eliminá objetos',
                   position : 'e',
                   animation: 'fadeIn'
                },
               {
                   sel : $('.leaflet-control-easyPrint-button'),
                   content : 'Imprimí tu mapa',
                   position : 'e',
                   animation: 'fadeIn'
                },
                {
                   sel : $('.leaflet-control-easyPrint-button'),
                   content : 'También podes usar este botón guardar tu mapa',
                   position : 'e',
                   animation: 'rotateInUpRight'
                },
                {
                  sel : $('.leaflet-control-easyPrint-button'),
                  content : 'Para guardar el mapa hacé click en el botón imprimir <br> <br> <img src= "https://i.imgur.com/t8Ka9kq.png"> <br> <br> ',
                  position : 'e',
                  animation: 'fadeIn',
                  expose: true,
                  onTripStart: function(){
                      //$('.trip-block').each(function(e){this.style.setProperty('width', '350px', 'important')})
                      $('.trip-block').each(function(e){this.style.setProperty('width', '350px', 'important')})
                      $('.trip-block').each(function(e){this.style.setProperty('top', '234.5px')})
                   },
                   onTripEnd: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '20em', 'important')})
                   },
                },
                {
                  sel : $('.leaflet-control-easyPrint-button'),
                  content : 'Tené en cuenta si la imagen que vas a guardar es una imagen apaisada o vertical y hacé click en \'Entendido\' <br> <br> <img src="https://i.imgur.com/lwmr8Ml.png"> <br> <br>',
                  position : 'e',
                  animation: 'fadeIn',
                  expose: true,
                  onTripStart: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '420px', 'important')});
                      $('.trip-block').each(function(e){this.style.setProperty('top', '214.5px')})
                   },
                   onTripEnd: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '20em', 'important')})
                   },
                },

                {
                  sel : $('.leaflet-control-easyPrint-button'),
                  content : 'En la nueva ventana que surgió hacé click en el boton &nbsp \'cambiar\' <br> <br> <img src="https://i.imgur.com/e35YG5j.png">  <br> <br>',
                  position : 'e',
                  animation: 'fadeIn',
                  expose: true,
                  onTripStart: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '430px', 'important')});
                      $('.trip-block').each(function(e){this.style.setProperty('top', '108.5px')})
                   },
                   onTripEnd: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '20em', 'important')})
                   },
                },

                {
                  sel : $('.leaflet-control-easyPrint-button'),
                  content : 'Hacé click en la opción &nbsp \'Guardar como PDF\' <br> <br> <img src="https://i.imgur.com/MD6SRGT.png"> <br> <br>',
                  position : 'e',
                  animation: 'fadeIn',
                  expose: true,
                  onTripStart: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '660px', 'important')});
                      $('.trip-block').each(function(e){this.style.setProperty('top', '224.5px')})
                   },
                   onTripEnd: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '20em', 'important')})
                   },
                },

                {
                  sel : $('.leaflet-control-easyPrint-button'),
                  content : 'En la opción de &nbsp \'Diseño\' &nbsp elegí &nbsp \'Horizontal\' &nbsp o &nbsp \'Vertical\' &nbsp de acuerdo a la orientación del mapa <br> <br> <img src="https://i.imgur.com/mBflEc4.png"> <br> <br>',
                  position : 'e',
                  animation: 'fadeIn',
                  expose: true,
                  onTripStart: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '430px', 'important')});
                      $('.trip-block').each(function(e){this.style.setProperty('top', '74.5px')})
                   },
                   onTripEnd: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '20em', 'important')})
                   },
                },

                {
                  sel : $('.leaflet-control-easyPrint-button'),
                  content : 'Por último hacé click en &nbsp\'Guardar\' &nbsp <br> <br> <img src="https://i.imgur.com/067ft0e.png"> <br> <br>',
                  position : 'e',
                  animation: 'fadeIn',
                  expose: true,
                  onTripStart: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '430px', 'important')});
                      $('.trip-block').each(function(e){this.style.setProperty('top', '84.5px')})
                   },
                   onTripEnd: function(){
                      $('.trip-block').each(function(e){this.style.setProperty('width', '20em', 'important')})
                   },
                },

               {
                   //sel : $('.mask2'),
                   sel : $('.endTutorialMsg'),
                   content : '¡Llegamos al final del tutorial! Podés empezarlo nuevamente o comenzar a editar tu mapa',
                   //position : 'w',
                   animation: 'fadeIn',
                },
                ], options); // details about options are listed below
    
                $("#activatetour").on("click", function() {
                  trip.start();
                  $('#tourcontrols').remove();
                });
                $("#dismisstour").on("click", function() {
                  window.location.href='mapaInteractivo.html';
                });

                // If tourcontrols does not exist, the trip starts automatically
                if (! $('#tourcontrols').length ) {
                  trip.start();
                }