var n = 0;



L.StyleForms=L.Class.extend({
	options:{currentMarkerStyle:{size:"m",color:"48a"}}
	,initialize:function(a){L.setOptions(this,a)}
	,clearForm:function(){this.options.styleEditorUi.innerHTML=""}
	,createGeometryForm:function(){/*this.clearForm();*/n++;alert(n);this.createColor(),this.createOpacity(),this.createStroke();var a=this.options.currentElement.target;(a instanceof L.Polygon||a instanceof L.LayerGroup)&&(this.createFillColor(),this.createFillOpacity())}
	,createMarkerForm:function(){this.clearForm(),this.createIconUrl(),this.createMarkerColor(),this.createMarkerSize()}
	,setNewMarker:function(){var a=this.options.currentMarkerStyle;if(a.size&&a.icon&&a.color){var b;switch(a.size){case"s":b=[20,50];break;case"m":b=[30,70];break;case"l":b=[35,90]}var c=new L.Icon({iconUrl:this.options.markerApi+"pin-"+a.size+"-"+a.icon+"+"+a.color+".png",iconSize:b}),d=this.options.currentElement.target;d.setIcon(c),this.fireChangeEvent(d)}}
	,createIconUrl:function(){var a=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.styleEditorUi);a.innerHTML="Icon:",this.createSelectInput(this.options.styleEditorUi,function(a){var b=a.target.value;this.options.currentMarkerStyle.icon=b,this.setNewMarker()}.bind(this),this.options.markers)}
	,createMarkerColor:function(){var a=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.styleEditorUi);a.innerHTML="Color:",this.createColorPicker(this.options.styleEditorUi,function(a){var b=this.rgbToHex(a.target.style.backgroundColor);this.options.currentMarkerStyle.color=b.replace("#",""),this.setNewMarker()}.bind(this))}
	,createMarkerSize:function(){var a=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.styleEditorUi);a.innerHTML="Size:";var b=L.DomUtil.create("div","leaflet-styleeditor-sizeicon sizeicon-small",this.options.styleEditorUi),c=L.DomUtil.create("div","leaflet-styleeditor-sizeicon sizeicon-medium",this.options.styleEditorUi),d=L.DomUtil.create("div","leaflet-styleeditor-sizeicon sizeicon-large",this.options.styleEditorUi);L.DomEvent.addListener(b,"click",function(){this.options.currentMarkerStyle.size="s",this.setNewMarker()},this),L.DomEvent.addListener(c,"click",function(){this.options.currentMarkerStyle.size="m",this.setNewMarker()},this),L.DomEvent.addListener(d,"click",function(){this.options.currentMarkerStyle.size="l",this.setNewMarker()},this)}
	,createColor:function(){var a=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.styleEditorUi);a.innerHTML=n+": Color:",this.createColorPicker(this.options.styleEditorUi,function(a){var b=this.rgbToHex(a.target.style.backgroundColor);this.setStyle("color",b)}.bind(this))}
	,createStroke:function(){var a=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.styleEditorUi);a.innerHTML="Line Stroke:";var b=L.DomUtil.create("div","leaflet-styleeditor-stroke",this.options.styleEditorUi);b.style.backgroundPosition="0px -75px";var c=L.DomUtil.create("div","leaflet-styleeditor-stroke",this.options.styleEditorUi);c.style.backgroundPosition="0px -95px";var d=L.DomUtil.create("div","leaflet-styleeditor-stroke",this.options.styleEditorUi);d.style.backgroundPosition="0px -115px",L.DomUtil.create("br","bla",this.options.styleEditorUi),L.DomEvent.addListener(b,"click",function(){this.setStyle("dashArray","1")},this),L.DomEvent.addListener(c,"click",function(){this.setStyle("dashArray","10,10")},this),L.DomEvent.addListener(d,"click",function(){this.setStyle("dashArray","15, 10, 1, 10")},this)}
	,createOpacity:function(){var a=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.styleEditorUi);a.innerHTML="Opacity:",this.createNumberInput(this.options.styleEditorUi,function(a){var b=a.target.value;this.setStyle("opacity",b)}.bind(this),this.options.currentElement.target.options.opacity,0,1,.1)}
	,createFillColor:function(){var a=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.styleEditorUi);a.innerHTML="Fill Color:",this.createColorPicker(this.options.styleEditorUi,function(a){var b=this.rgbToHex(a.target.style.backgroundColor);this.setStyle("fillColor",b)}.bind(this))}
	,createFillOpacity:function(){var a=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.styleEditorUi);a.innerHTML="Fill Opacity:",this.createNumberInput(this.options.styleEditorUi,function(a){var b=a.target.value;this.setStyle("fillOpacity",b)}.bind(this),this.options.currentElement.target.options.fillOpacity,0,1,.1)}
	,createColorPicker:function(a,b){var c=L.DomUtil.create("div","leaflet-styleeditor-colorpicker",a);return this.options.colorRamp.forEach(function(a){var d=L.DomUtil.create("div","leaflet-styleeditor-color",c);d.style.backgroundColor=a,L.DomEvent.addListener(d,"click",function(a){a.stopPropagation(),b(a)})},this),L.DomUtil.create("br","",a),L.DomUtil.create("br","",a),c}
	,createNumberInput:function(a,b,c,d,e,f){var g=L.DomUtil.create("input","leaflet-styleeditor-input",a);return g.setAttribute("type","number"),g.setAttribute("value",c),g.setAttribute("min",d),g.setAttribute("max",e),g.setAttribute("step",f),L.DomEvent.addListener(g,"change",function(a){a.stopPropagation(),b(a)}),L.DomEvent.addListener(g,"keyup",function(a){a.stopPropagation(),b(a)}),L.DomUtil.create("br","",a),L.DomUtil.create("br","",a),g}
	,createSelectInput:function(a,b,c){var d=L.DomUtil.create("select","leaflet-styleeditor-select",a);return c.forEach(function(a){var b=L.DomUtil.create("option","leaflet-styleeditor-option",d);b.setAttribute("value",a),b.innerHTML=a},this),L.DomEvent.addListener(d,"change",function(a){a.stopPropagation(),b(a)}),d}
	,setStyle:function(a,b){var c={};c[a]=b;var d=this.options.currentElement.target;d.setStyle(c),this.fireChangeEvent(d)}
	,fireChangeEvent:function(a){this.options.currentElement.target._map.fireEvent("styleeditor:changed",a)}
	,componentToHex:function(a){var b=a.toString(16);return 1===b.length?"0"+b:b}
	,rgbToHex:function(a){return a=a.substring(4).replace(")","").split(","),"#"+this.componentToHex(parseInt(a[0],10))+this.componentToHex(parseInt(a[1],10))+this.componentToHex(parseInt(a[2],10))}
}),
L.Control.StyleEditor=L.Control.extend({
	options:{
		position:"topleft"
		,enabled:!1
		,colorRamp:["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d"]
		,markerApi:"https://api.tiles.mapbox.com/v3/marker/"
		,markers:["circle-stroked", "circle","square-stroked","square","triangle-stroked","triangle","star-stroked","star","cross","marker-stroked","marker","religious-jewish","religious-christian","religious-muslim","cemetery","rocket","airport","heliport","rail","rail-metro","rail-light","bus","fuel","parking","parking-garage","airfield","roadblock","ferry","harbor","bicycle","park","park2","museum","lodging","monument","zoo","garden","campsite","theatre","art-gallery","pitch","soccer","america-football","tennis","basketball","baseball","golf","swimming","cricket","skiing","school","college","library","post","fire-station","town-hall","police","prison","embassy","beer","restaurant","cafe","shop","fast-food","bar","bank","grocery","cinema","pharmacy","hospital","danger","industrial","warehouse","commercial","building","place-of-worship","alcohol-shop","logging","oil-well","slaughterhouse","dam","water","wetland","disability","telephone","emergency-telephone","toilets","waste-basket","music","land-use","city","town","village","farm","bakery","dog-park","lighthouse","clothing-store","polling-place","playground","entrance","heart","london-underground","minefield","rail-underground","rail-above","camera","laundry","car","suitcase","hairdresser","chemist","mobilephone","scooter"]
		,editlayers:[]
		,layerGroups:[]
		,openOnLeafletDraw:!0
		,showTooltip:!0
		,useGrouping:!0
	}
	,onAdd:function(a){
		return this.options.map=a,this.createUi()
	}
	,createUi:function(){
		var a=this.options.controlDiv=L.DomUtil.create("div","leaflet-control-styleeditor"),b=this.options.controlUI=L.DomUtil.create("div","leaflet-control-styleeditor-interior",a);b.title="Style Editor";var c=this.options.styleEditorDiv=L.DomUtil.create("div","leaflet-styleeditor",this.options.map._container);return this.options.styleEditorHeader=L.DomUtil.create("div","leaflet-styleeditor-header",c),this.options.styleEditorUi=L.DomUtil.create("div","leaflet-styleeditor-interior",c),this.addDomEvents(),this.addLeafletDrawEvents(),this.addButtons(),a
	}
	,addDomEvents:function(){
		L.DomEvent.addListener(this.options.controlDiv,"click",function(a){this.clickHandler(a),a.stopPropagation()},this),L.DomEvent.addListener(this.options.controlDiv,"dblclick",function(a){a.stopPropagation()},this),L.DomEvent.addListener(this.options.styleEditorDiv,"mouseenter",this.disableLeafletActions,this),L.DomEvent.addListener(this.options.styleEditorDiv,"mouseleave",this.enableLeafletActions,this)
	}
	,addLeafletDrawEvents:function(){
		this.options.openOnLeafletDraw&&L.Control.Draw&&this.options.map.on("draw:created",function(a){this.initChangeStyle({target:a.layer})},this)
	}
	,addButtons:function(){
		var a=L.DomUtil.create("button","leaflet-styleeditor-button styleeditor-nextBtn",this.options.styleEditorHeader);a.title="Choose another element you want to style",L.DomEvent.addListener(a,"click",function(a){this.hideEditor(),this.createTooltip(),a.stopPropagation()},this)
	}
	,clickHandler:function(){
		this.options.enabled=!this.options.enabled,this.options.enabled?this.enable():(L.DomUtil.removeClass(this.options.controlUI,"enabled"),this.disable())
	}
	,disableLeafletActions:function(){
		var a=this.options.map;a.dragging.disable(),a.touchZoom.disable(),a.doubleClickZoom.disable(),a.scrollWheelZoom.disable(),a.boxZoom.disable(),a.keyboard.disable()
	}
	,enableLeafletActions:function(){
		var a=this.options.map;a.dragging.enable(),a.touchZoom.enable(),a.doubleClickZoom.enable(),a.scrollWheelZoom.enable(),a.boxZoom.enable(),a.keyboard.enable()
	}
	,enable:function(){
		L.DomUtil.addClass(this.options.controlUI,"enabled"),this.options.map.eachLayer(this.addEditClickEvents,this),this.createTooltip()
	}
	,disable:function(){
		this.options.editlayers.forEach(this.removeEditClickEvents,this),this.options.editlayers=[],this.options.layerGroups=[],this.hideEditor(),this.removeTooltip()
	}
	,addEditClickEvents:function(a){
		if(this.options.useGrouping&&a instanceof L.LayerGroup)this.options.layerGroups.push(a);
		else if(a instanceof L.Marker||a instanceof L.Path){
			var b=a.on("click",this.initChangeStyle,this);
			this.options.editlayers.push(b);
		}
	}
	,removeEditClickEvents:function(a){
		a.off("click",this.initChangeStyle,this)
	}
	,hideEditor:function(){
		L.DomUtil.removeClass(this.options.styleEditorDiv,"editor-enabled")
	}
	,showEditor:function(){
		var a=this.options.styleEditorDiv;L.DomUtil.hasClass(a,"editor-enabled")||L.DomUtil.addClass(a,"editor-enabled")
	}
	,initChangeStyle:function(a){
		this.options.currentElement=this.options.useGrouping?this.getMatchingElement(a):a,this.showEditor(),this.removeTooltip();var b=a.target;b instanceof L.Marker?this.createMarkerForm():this.createGeometryForm()
	}
	,createGeometryForm:function(){
		var a=new L.StyleForms({colorRamp:this.options.colorRamp,styleEditorUi:this.options.styleEditorUi,currentElement:this.options.currentElement});a.createGeometryForm()
	}
	,createMarkerForm:function(){
		var a=new L.StyleForms({colorRamp:this.options.colorRamp,styleEditorUi:this.options.styleEditorUi,currentElement:this.options.currentElement,markerApi:this.options.markerApi,markers:this.options.markers});a.createMarkerForm()
	}
	,createTooltip:function(){
		if(this.options.showTooltip){var a=L.DomUtil.create("div","leaflet-styleeditor-tooltip-wrapper",document.body),b=this.options.tooltip=L.DomUtil.create("div","leaflet-styleeditor-tooltip",a);b.innerHTML="Click on the element you want to style"}
	}
	,getMatchingElement:function(a){
		var b=null,c=a.target;
		for(i=0;i<this.options.layerGroups.length;++i)
			if(b=this.options.layerGroups[i],b&&c!=b&&b.hasLayer(c))return b.options&&b.options.opacity||(b.options=c.options,c.setIcon&&(b.setIcon=function(a){
				b.eachLayer(function(b){
					b instanceof L.Marker&&b.setIcon(a)
				})
			})),this.getMatchingElement({target:b});
			return a
		}
	,removeTooltip:function(){
		this.options.tooltip&&this.options.tooltip.parentNode&&this.options.tooltip.parentNode.removeChild(this.options.tooltip)
	}
}),
L.control.styleEditor=function(a){return new L.Control.StyleEditor(a)};