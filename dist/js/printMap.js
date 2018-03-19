// archivo imprimir mapa
                    // Agrega boton para Imprimir
                    //L.easyPrint().addTo(map);
                    // Functions to print the map
                    $(function() {
                        $( "#portraitDialog" ).dialog({
                            autoOpen: false,
                            modal: true,
                            buttons: {
                                "Entendido": function() {
                                    //Close the modal
                                    $( this ).dialog( "close" );
                            
                                    $('#printerDiv').fadeIn('slow', function() {
                                        //setPortraitBounds();
                                        $('.browser-print-mode').click();
                                    });

                            
                                    //setTimeout(function(){printMap(postPrint);}, 700);
                                }
                            },
                            show: {
                                effect: "blind",
                                duration: 500
                            },
                        hide: {
                            effect: "explode",
                            duration: 500
                            }
                        });
                    });
        
                    $(function() {
                        $( "#landscapeDialog" ).dialog({
                            autoOpen: false,
                            modal: true,
                            buttons: {
                                "Entendido": function() {
                                    //Close the modal
                                    $( this ).dialog( "close" );

                                    $('#printerDiv').fadeIn('slow', function() {
                                        //setLandscapeBounds();
                                        $('.browser-print-mode').click();
                                    });
        
                                    //putTextAreaIntoPElement();
                                    //setTimeout(function(){printMap(postPrint);}, 500);

                                }
                            },
                            show: {
                                effect: "blind",
                                duration: 500
                            },
                        hide: {
                            effect: "explode",
                            duration: 500
                            }
                        });
                    });

                    //The map will be printed without zoom. In order to do this, we must execute the function printtMap() after x miliseconds, so that we see the zoom changes.
                    function printHack(){
                        //$('.leaflet-control-browser-print').click(function(event){
                        $('.leaflet-draw-draw-marker').click(function(event){                            
                            event.preventDefault();
                            showPrintDialog();
                        });
                    }
    
                //This function shows a message to the user telling whether the image must be printed in horizontal or vertical mode. Afterthat, the user clicks 'Ok'
                //and then the printscreen is displayed
                function showPrintDialog(){
                    if ((imageWidth == 2000) && (imageHeight == 2500)){
                        $( "#portraitDialog" ).dialog( "open" );
                    }
                    else if((imageWidth == 2500) && (imageHeight == 2000)){
                        $( "#landscapeDialog" ).dialog( "open" );                   
                    }
                }
                    
                function printMap(callback){
                    //putTextAreaIntoPElement();
                    /*
                    var style = 'http://mapasescolares.ign.gob.ar/dist/css/easyPrint.css';
                    $('#map').print({stylesheet:style});
                    
                    if (typeof callback === "function"){
                        postPrint();
                    }
                    */

                }   

                function postPrint(){
                    /*
                    setTheTextAreaAgain();
                    map.setMaxBounds(originalMaxBounds);
                    map.setView([0,0],5);
                    */
                    setTimeout(function(){$('#printerDiv').fadeOut('slow');}, 500);
                }

                //Initialize the StyleEditor
                var styleEditor = L.control.styleEditor({
                    openOnLeafletDraw: true,
                    position: "topleft"
                });
                map.addControl(styleEditor);
                
                //printHack();
                
                /*
                 *  This function was made to compensate the image shift across every display sizes                        
                 */  
                /*           
                function calculateDisplacement(dynamicDimension, benchmarkDisplacement, benchmarkDimension){
                    return dynamicDimension * benchmarkDisplacement / benchmarkDimension;
                }

                function setPortraitBounds(){
                    //Print with default settings
                    var newLatitude = calculateDisplacement($('#map').height(), 12, 800);   //This shouldn't be changed
                    var newLongitude = calculateDisplacement($('#map').width(), 11.5, 780); //This shouldn't be changed

                    map.setMaxBounds(new L.LatLngBounds([25,-25], [0,80]));          
//                          map.setView([20,8.18],5.077);
                    map.setView([newLatitude, newLongitude], 5.077);           
                }
    
                function setLandscapeBounds(){
                    var newLatitude = calculateDisplacement($('#map').height(), 7.5, 800);  //This shouldn't be changed
                    var newLongitude = calculateDisplacement($('#map').width(), 9, 680); //This shouldn't be changed

                    //Print with default settings
                    map.setMaxBounds(new L.LatLngBounds([40, -10], [-40,85]));
//                          map.setView([7.5,13],5.077);
                    map.setView([newLatitude, newLongitude], 5.077);           
                }
                function putTextAreaIntoPElement(){
                    $('.leaflet-illustrate-textbox-container').each(function(){
                        var text = $(this).children().val();
                        text = "<p>" + text + "</p>";
                        $(this).html(text);
                    });     
                }
    
                function setTheTextAreaAgain(){
                    $('.leaflet-illustrate-textbox-container').each(function(){
                        var text = $(this).children().text();
                        text = '<textarea style="width: 100%; height: 100%" class="leaflet-illustrate-textbox">' + text + '</textarea>';
                        $(this).html(text);
                    });             
                } 
                */

            // fin archivo imprimirMapa.js