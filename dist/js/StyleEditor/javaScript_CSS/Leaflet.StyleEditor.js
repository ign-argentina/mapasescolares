var opacityTxt = "Transparencia:", lineStrokeTxt = "Formato de línea:", fillColorTxt = "Color de relleno:", fillOpacity = "Transparencia del área:", markerIconTxt = "Ícono:", MarkerSizeTxt = "Tamaño:", exitStyleEditorTxt = "Salir del editor de estilo";

L.StyleForms = L.Class.extend({
    options: {
        currentMarkerStyle: {
            size: "m",
            color: "48a"
        }
    },
    initialize: function(t) {
        L.setOptions(this, t);
        //Any side menu that may be open disapear 
        $('.animatedMenu').fadeOut("slow");
        // Removes the little menu around the big menu button )(mask2)
        $('.test1').removeClass('activo1');
        $('.test2').removeClass('activo2');
        $('.test3').removeClass('activo3');
        $('.test4').removeClass('activo4');
    },
    clearForm: function() {
        this.options.styleEditorUi.innerHTML = "";
    },
    createGeometryForm: function() {
        this.clearForm(), this.createColor(), this.createOpacity(), this.createStroke();
        var t = this.options.currentElement.target;
        (t instanceof L.Polygon || t instanceof L.LayerGroup) && (this.createFillColor(), 
        this.createFillOpacity());
    },
    createMarkerForm: function() {
        this.clearForm(), this.createIconUrl(), this.createMarkerColor(), this.createMarkerSize();
    },
    setNewMarker: function() {
        var t = this.options.currentMarkerStyle;
        if (t.size && t.icon && t.color) {
            var e;
            switch (t.size) {
              case "s":
                e = [ 20, 50 ];
                break;

              case "m":
                e = [ 30, 70 ];
                break;

              case "l":
                e = [ 35, 90 ];
            }
            var i = new L.Icon({
                iconUrl: this.options.markerApi + "pin-" + t.size + "-" + t.icon + "+" + t.color + ".png",
                iconSize: e
            }), o = this.options.currentElement.target;
            o.setIcon(i), this.fireChangeEvent(o);
        }
    },
    createIconUrl: function() {
        var t = L.DomUtil.create("label", "leaflet-styleeditor-label", this.options.styleEditorUi);
        t.innerHTML = markerIconTxt, this.createSelectInput(this.options.styleEditorUi, function(t) {
            var e = t.target.value;
            this.options.currentMarkerStyle.icon = e, this.setNewMarker();
        }.bind(this), this.options.markers);
    },
    createMarkerColor: function() {
        var t = L.DomUtil.create("label", "leaflet-styleeditor-label", this.options.styleEditorUi);
        t.innerHTML = "Color:", this.createColorPicker(this.options.styleEditorUi, function(t) {
            var e = this.rgbToHex(t.target.style.backgroundColor);
            this.options.currentMarkerStyle.color = e.replace("#", ""), this.setNewMarker();
        }.bind(this));
    },
    createMarkerSize: function() {
        var t = L.DomUtil.create("label", "leaflet-styleeditor-label", this.options.styleEditorUi);
        t.innerHTML = MarkerSizeTxt;
        var e = L.DomUtil.create("div", "leaflet-styleeditor-sizeicon sizeicon-small", this.options.styleEditorUi), i = L.DomUtil.create("div", "leaflet-styleeditor-sizeicon sizeicon-medium", this.options.styleEditorUi), o = L.DomUtil.create("div", "leaflet-styleeditor-sizeicon sizeicon-large", this.options.styleEditorUi);
        L.DomEvent.addListener(e, "click", function() {
            this.options.currentMarkerStyle.size = "s", this.setNewMarker();
        }, this), L.DomEvent.addListener(i, "click", function() {
            this.options.currentMarkerStyle.size = "m", this.setNewMarker();
        }, this), L.DomEvent.addListener(o, "click", function() {
            this.options.currentMarkerStyle.size = "l", this.setNewMarker();
        }, this);
    },
    createColor: function() {
        var t = L.DomUtil.create("label", "leaflet-styleeditor-label", this.options.styleEditorUi);
        t.innerHTML = "Color:", this.createColorPicker(this.options.styleEditorUi, function(t) {
            var e = this.rgbToHex(t.target.style.backgroundColor);
            this.setStyle("color", e);
        }.bind(this));
    },
    createStroke: function() {
        var t = L.DomUtil.create("label", "leaflet-styleeditor-label", this.options.styleEditorUi);
        t.innerHTML = lineStrokeTxt;
        var e = L.DomUtil.create("div", "leaflet-styleeditor-stroke", this.options.styleEditorUi);
        e.style.backgroundPosition = "0px -75px";
        var i = L.DomUtil.create("div", "leaflet-styleeditor-stroke", this.options.styleEditorUi);
        i.style.backgroundPosition = "0px -95px";
        var o = L.DomUtil.create("div", "leaflet-styleeditor-stroke", this.options.styleEditorUi);
        o.style.backgroundPosition = "0px -115px", L.DomUtil.create("br", "bla", this.options.styleEditorUi), 
        L.DomEvent.addListener(e, "click", function() {
            this.setStyle("dashArray", "1");
        }, this), L.DomEvent.addListener(i, "click", function() {
            this.setStyle("dashArray", "10,10");
        }, this), L.DomEvent.addListener(o, "click", function() {
            this.setStyle("dashArray", "15, 10, 1, 10");
        }, this);
    },
    createOpacity: function() {
        var t = L.DomUtil.create("label", "leaflet-styleeditor-label", this.options.styleEditorUi);
        t.innerHTML = opacityTxt, this.createNumberInput(this.options.styleEditorUi, function(t) {
            var e = t.target.value;
            this.setStyle("opacity", e);
        }.bind(this), this.options.currentElement.target.options.opacity, 0, 1, .1);
    },
    createFillColor: function() {
        var t = L.DomUtil.create("label", "leaflet-styleeditor-label", this.options.styleEditorUi);
        t.innerHTML = fillColorTxt, this.createColorPicker(this.options.styleEditorUi, function(t) {
            var e = this.rgbToHex(t.target.style.backgroundColor);
            this.setStyle("fillColor", e);
        }.bind(this));
    },
    createFillOpacity: function() {
        var t = L.DomUtil.create("label", "leaflet-styleeditor-label", this.options.styleEditorUi);
        t.innerHTML = fillOpacity, this.createNumberInput(this.options.styleEditorUi, function(t) {
            var e = t.target.value;
            this.setStyle("fillOpacity", e);
        }.bind(this), this.options.currentElement.target.options.fillOpacity, 0, 1, .1);
    },
    createColorPicker: function(t, e) {
        var i = L.DomUtil.create("div", "leaflet-styleeditor-colorpicker", t);
        return this.options.colorRamp.forEach(function(t) {
            var o = L.DomUtil.create("div", "leaflet-styleeditor-color", i);
            o.style.backgroundColor = t, L.DomEvent.addListener(o, "click", function(t) {
                t.stopPropagation(), e(t);
            });
        }, this), L.DomUtil.create("br", "", t), L.DomUtil.create("br", "", t), i;
    },
    createNumberInput: function(t, e, i, o, r, n) {
        var s = L.DomUtil.create("input", "leaflet-styleeditor-input", t);
        return s.setAttribute("type", "number"), s.setAttribute("value", i), s.setAttribute("min", o), 
        s.setAttribute("max", r), s.setAttribute("step", n), L.DomEvent.addListener(s, "change", function(t) {
            t.stopPropagation(), e(t);
        }), L.DomEvent.addListener(s, "keyup", function(t) {
            t.stopPropagation(), e(t);
        }), L.DomUtil.create("br", "", t), L.DomUtil.create("br", "", t), s;
    },
    
    createSelectInput: function(t, e, i) {
        var o = L.DomUtil.create("select", "leaflet-styleeditor-select", t);
        return i.forEach(function(t) {
            var e = L.DomUtil.create("option", "leaflet-styleeditor-option", o);
            e.setAttribute("value", t), e.innerHTML = this.setIconName(t);
            //e.setAttribute("value", t), e.innerHTML = this.setIconName(t);
        }, this), L.DomEvent.addListener(o, "change", function(t) {
            t.stopPropagation(), e(t);
        }), o;
    },
    setStyle: function(t, e) {
        var i = {};
        i[t] = e;
        var o = this.options.currentElement.target;
        o.setStyle(i), this.fireChangeEvent(o);
    },
    fireChangeEvent: function(t) {
        this.options.currentElement.target._map.fireEvent("styleeditor:changed", t);
    },
    componentToHex: function(t) {
        var e = t.toString(16);
        return 1 === e.length ? "0" + e : e;
    },
    rgbToHex: function(t) {
        return t = t.substring(4).replace(")", "").split(","), "#" + this.componentToHex(parseInt(t[0], 10)) + this.componentToHex(parseInt(t[1], 10)) + this.componentToHex(parseInt(t[2], 10));
    },
    //26/12/2016 Franco: Esta función se diseñó para ser usada e createSelectInput para traducir los nombres que aparecen en la barra desplegable de selección de ícono
    setIconName: function(t){
    var res = {"circle-stroked": "Círculo hueco" , "circle": "Círculo", "square" : "Cuadrado", "square-stroked": "Cuadrado hueco", "triangle-stroked": "Triángulo hueco" ,
    "triangle" : "Triángulo", "star-stroked": "Estrella hueca", "star" : "Estrella", "cross": "Cruz", "marker-stroked": "Marcador hueco", "marker": "Marcador", "religious-jewish": "Iglesia judía",
    "religious-christian": "Iglesia cristiana", "religious-muslim": "Iglesia musulmana", "cemetery": "Cementerio", "rocket": "Cohete", "airport": "Aeropuerto", "heliport": "Helipuerto", 
    "rail": "Tren", "rail-metro": "Metro", "rail-light": "Metro liviano", "bus": "Colectivo", "fuel": "Estación de servicio", "parking": "Estacionamiento", "parking-garage" : "Garage de estacionamiento",
    "airfield": "Aeródromo", "roadblock": "Puesto de control", "ferry": "Ferry", "harbor": "Puerto", "bicycle": "Bicicleta", "park": "Parque", "park2": "Parque 2", "museum": "Museo", "lodging": "Alojamiento",
    "monument": "Monumento", "zoo": "Zoológico", "garden": "Jardín", "campsite": "Campamento" , "theatre": "Teatro", "art-gallery": "Galería de arte", "pitch": "Campo", "soccer": "Estadio de fútbol",
    "america-football": "Estadio de fútbol americano", "tennis" : "Cancha de tenis", "basketball" : "Cancha de básquetbol", "baseball": "Estadio de béisbol", "golf": "Campo de golf", "swimming": "Pileta de Natación",
    "cricket" : "Críquet", "skiing": "Esquí" , "school": "Escuela", "college": "Universidad", "library": "Biblioteca", "post": "Correo", "fire-station": "Estación de bomberos",
    "town-hall": "Edificio de Gobierno", "police": "Estación de policía", "prison": "Prisión" ,"embassy": "Embajada", "beer": "Cerveza" , "restaurant": "Restaurante", "cafe": "Café",
    "shop": "Tienda", "fast-food": "Comida rapida", "bar": "Bar", "bank": "Banco", "grocery": "Supermercado" , "cinema": "Cine", "pharmacy": "Farmacia", "hospital": "Hospital", "danger": "Peligro",
    "industrial": "Fábrica", "warehouse": "Depósito", "commercial": "Edificio comercial" ,"building": "Edificio" , "place-of-worship": "Templo", "alcohol-shop": " Tienda de licor",
    "logging": "Deforestación", "oil-well": "Pozo de petróleo", "slaughterhouse": "Matadero", "dam": "Dique" , "water":"Agua" , "wetland": "Humedal" , "disability": "Discapacidad",
    "telephone": "Teléfono", "emergency-telephone": "Teléfono de emergencia", "toilets": "Baños", "waste-basket": "Contenedor de residuos", "music": "Música", "land-use": "Terreno" , "city": "Ciudad" ,
     "town": "Pueblo", "village": "Villa" , "farm": "Granja", "bakery": "Panadería", "dog-park":"Parque para perros" , "lighthouse": "Faro", "clothing-store": "Tienda de ropa",
     "polling-place": "Colegio electoral", "playground": "patio de recreo" ,"entrance": "Entrada" , "heart": "Corazón",  "london-underground": "Subte de Londres" , "minefield": "Campo minado" ,
     "rail-underground": "Tren subterráneo", "rail-above": "Tren superior", "camera": "Cámara", "laundry": "Lavandería" , "car": "Auto" , "suitcase": "Maleta", "hairdresser": "Peluquería",
     "chemist": "Química", "mobilephone": "Teléfono celular", "scooter": "Scooter"
      };
    
    //,,,,,,,,,,,,,,,,,,,,,,,,
    return res[t];
    }
    
}), L.Control.StyleEditor = L.Control.extend({
    options: {
        position: "topleft",
        enabled: !1,
        colorRamp: [ "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d" ],
        markerApi: "https://api.tiles.mapbox.com/v3/marker/",
        markers: [ "circle-stroked", "circle", "square-stroked", "square", "triangle-stroked", "triangle", "star-stroked", "star", "cross", "marker-stroked", "marker", "religious-jewish", "religious-christian", "religious-muslim", "cemetery", "rocket", "airport", "heliport", "rail", "rail-metro", "rail-light", "bus", "fuel", "parking", "parking-garage", "airfield", "roadblock", "ferry", "harbor", "bicycle", "park", "park2", "museum", "lodging", "monument", "zoo", "garden", "campsite", "theatre", "art-gallery", "pitch", "soccer", "america-football", "tennis", "basketball", "baseball", "golf", "swimming", "cricket", "skiing", "school", "college", "library", "post", "fire-station", "town-hall", "police", "prison", "embassy", "beer", "restaurant", "cafe", "shop", "fast-food", "bar", "bank", "grocery", "cinema", "pharmacy", "hospital", "danger", "industrial", "warehouse", "commercial", "building", "place-of-worship", "alcohol-shop", "logging", "oil-well", "slaughterhouse", "dam", "water", "wetland", "disability", "telephone", "emergency-telephone", "toilets", "waste-basket", "music", "land-use", "city", "town", "village", "farm", "bakery", "dog-park", "lighthouse", "clothing-store", "polling-place", "playground", "entrance", "heart", "london-underground", "minefield", "rail-underground", "rail-above", "camera", "laundry", "car", "suitcase", "hairdresser", "chemist", "mobilephone", "scooter" ],
        editlayers: [],
        layerGroups: [],
        openOnLeafletDraw: !0,
        showTooltip: !0,
        useGrouping: !0
    },
    onAdd: function(t) {
        return this.options.map = t, this.createUi();
    },
    createUi: function() {
        var t = this.options.controlDiv = L.DomUtil.create("div", "leaflet-control-styleeditor"), e = this.options.controlUI = L.DomUtil.create("div", "leaflet-control-styleeditor-interior", t);
        e.title = "Style Editor";
        var i = this.options.styleEditorDiv = L.DomUtil.create("div", "leaflet-styleeditor", this.options.map._container);
        return this.options.styleEditorHeader = L.DomUtil.create("div", "leaflet-styleeditor-header", i), 
        this.options.styleEditorUi = L.DomUtil.create("div", "leaflet-styleeditor-interior", i), 
        this.addDomEvents(), this.addLeafletDrawEvents(), this.addButtons(), t;
    },
    addDomEvents: function() {
        L.DomEvent.addListener(this.options.controlDiv, "click", function(t) {
            this.clickHandler(t), t.stopPropagation();
        }, this), L.DomEvent.addListener(this.options.controlDiv, "dblclick", function(t) {
            t.stopPropagation();
        }, this), L.DomEvent.addListener(this.options.styleEditorDiv, "mouseenter", this.disableLeafletActions, this), 
        L.DomEvent.addListener(this.options.styleEditorDiv, "mouseleave", this.enableLeafletActions, this);
    },
    addLeafletDrawEvents: function() {
        this.options.openOnLeafletDraw && L.Control.Draw && this.options.map.on("draw:created", function(t) {
            this.initChangeStyle({
                target: t.layer
            });
        }, this);
    },
    addButtons: function() {
        var t = L.DomUtil.create("button", "leaflet-styleeditor-button styleeditor-nextBtn", this.options.styleEditorHeader);
        t.title = exitStyleEditorTxt, L.DomEvent.addListener(t, "click", function(t) {
            this.hideEditor(), this.createTooltip(), t.stopPropagation();
        }, this);
    },
    clickHandler: function() {
        this.options.enabled = !this.options.enabled, this.options.enabled ? this.enable() : (L.DomUtil.removeClass(this.options.controlUI, "enabled"), 
        this.disable());
    },
    disableLeafletActions: function() {
        var t = this.options.map;
        t.dragging.disable(), t.touchZoom.disable(), t.doubleClickZoom.disable(), t.scrollWheelZoom.disable(), 
        t.boxZoom.disable(), t.keyboard.disable();
    },
    enableLeafletActions: function() {
        var t = this.options.map;
        t.dragging.enable(), t.touchZoom.enable(), t.doubleClickZoom.enable(), t.scrollWheelZoom.enable(), 
        t.boxZoom.enable(), t.keyboard.enable();
    },
    enable: function() {
        L.DomUtil.addClass(this.options.controlUI, "enabled"), this.options.map.eachLayer(this.addEditClickEvents, this), 
        this.createTooltip();
    },
    disable: function() {
        this.options.editlayers.forEach(this.removeEditClickEvents, this), this.options.editlayers = [], 
        this.options.layerGroups = [], this.hideEditor(), this.removeTooltip();
    },
    addEditClickEvents: function(t) {
        if (this.options.useGrouping && t instanceof L.LayerGroup) this.options.layerGroups.push(t); else if (t instanceof L.Marker || t instanceof L.Path) {
            var e = t.on("click", this.initChangeStyle, this);
            this.options.editlayers.push(e);
        }
    },
    removeEditClickEvents: function(t) {
        t.off("click", this.initChangeStyle, this);
    },
    hideEditor: function() {
        L.DomUtil.removeClass(this.options.styleEditorDiv, "editor-enabled");
    },
    showEditor: function() {
        if (void 0 === this.options.currentElement.target._icon || "null" == typeof this.options.currentElement.target._icon || null == this.options.currentElement.target._icon.firstChild) {
            var t = this.options.styleEditorDiv;
            L.DomUtil.hasClass(t, "editor-enabled") || L.DomUtil.addClass(t, "editor-enabled");
        }
    },
    initChangeStyle: function(t) {
        this.options.currentElement = this.options.useGrouping ? this.getMatchingElement(t) : t, 
        this.showEditor(), this.removeTooltip();
        var e = t.target;
        e instanceof L.Marker ? this.createMarkerForm() : this.createGeometryForm();
    },
    createGeometryForm: function() {
        var t = new L.StyleForms({
            colorRamp: this.options.colorRamp,
            styleEditorUi: this.options.styleEditorUi,
            currentElement: this.options.currentElement
        });
        t.createGeometryForm();
    },
    createMarkerForm: function() {
        var t = new L.StyleForms({
            colorRamp: this.options.colorRamp,
            styleEditorUi: this.options.styleEditorUi,
            currentElement: this.options.currentElement,
            markerApi: this.options.markerApi,
            markers: this.options.markers
        });
        t.createMarkerForm();
    },
    createTooltip: function() {
        if (this.options.showTooltip) {
            var t = L.DomUtil.create("div", "leaflet-styleeditor-tooltip-wrapper", document.body), e = this.options.tooltip = L.DomUtil.create("div", "leaflet-styleeditor-tooltip", t);
            e.innerHTML = "Click on the element you want to style";
        }
    },
    getMatchingElement: function(t) {
        var e = null, o = t.target;
        for (i = 0; i < this.options.layerGroups.length; ++i) if (e = this.options.layerGroups[i], 
        e && o != e && e.hasLayer(o)) return e.options && e.options.opacity || (e.options = o.options, 
        o.setIcon && (e.setIcon = function(t) {
            e.eachLayer(function(e) {
                e instanceof L.Marker && e.setIcon(t);
            });
        })), this.getMatchingElement({
            target: e
        });
        return t;
    },
    removeTooltip: function() {
        this.options.tooltip && this.options.tooltip.parentNode && this.options.tooltip.parentNode.removeChild(this.options.tooltip);
    }
}), L.control.styleEditor = function(t) {
    return new L.Control.StyleEditor(t);
};