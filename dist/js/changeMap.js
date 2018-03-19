 // Change de map after click in the side menu
                function changeMap(newImagePath){
                    $('#map').remove();
                    $('#mapa-Ar-leaflet').append('<div id="map" class="leaflet-map tour_2"></div>');
                    newMap(newImagePath);
                }
    
                function loadImage(newImagePath){
                    var newImg = new Image();
    
                    newImg.onload = function(){
                        imageWidth = this.width ;
                        imageHeight = this.height;
    
                        if ((imageWidth == 2000) && (imageHeight == 2500)){
                            originalMaxBounds = new L.LatLngBounds([25,0], [0,20]);
                            map.setMaxBounds(originalMaxBounds);
                            // Add invisible polygon shape to fix the size of the print page
                            sizePolygon = L.polygon([[28.4,22],[28.4,0],[0,0], [0,22]], {stroke:false, weight: 2, color: 'black', fill: false, dashArray: '5, 5'}).addTo(map);
                            imageBounds = [[25,0], [0,20]];
                        }
    
                        else if((imageWidth == 2500) && (imageHeight == 2000)){
                            originalMaxBounds = new L.LatLngBounds([20,0], [0,25]); 
                            map.setMaxBounds(originalMaxBounds);
                            // Add invisible polygon shape to fix the size of the print page
                            sizePolygon = L.polygon([[22,28.4],[22,0],[0,0], [0,28.4]], {stroke:false, weight: 2, color: 'black', fill: false, dashArray: '5, 5'}).addTo(map);
                            imageBounds = [[20,0], [0,25]];
                        }               
    
                        currentImage = L.imageOverlay(newImagePath, imageBounds).addTo(map);
                    }
                    newImg.src = newImagePath; // this must be done AFTER setting onload    
                }