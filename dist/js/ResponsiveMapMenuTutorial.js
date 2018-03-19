function adaptarTexto(a) {
    a = a.replace(/ |Buenos|Aires|á|é|í|ó|ú/g, function myFunction(x){var res = ''; if(x == 'á') res = 'a'; if(x=='é') res='e'; if(x=='í') res='i'; if(x=='ó') res='o'; if(x=='ú') res='u'; if(x=='Buenos') res='bs';if(x=='Aires') res='as'; return res;}).toLocaleLowerCase().toString();
    return a;
}

// busca un mapa y lo cambia en la vista
function buscaMapa(nombreMapa) {
    provincias.forEach(function (item) { // recorre el array de provincias y compara cada URL con el texto buscado
        var strUrl = adaptarTexto(item); // adapta la URL para que no hayan tildes, mayúsculas o espacios
        if(strUrl.search(nombreMapa) > 0){
            changeMap(item); // actualiza el mapa
        }
    });
}

$('.test1').click(function(){
    $('#mapaArgentinaBicontinental').fadeIn("slow");
    /*
    // Recalculate imageMap MapButtons
    $('img[usemap]').rwdImageMaps();
    // Hilight MapButtons
    $('.map').maphilight();
    */
});
$('.test2').click(function(){
    $('#buttons').fadeIn("slow");
});
$('.test3').click(function(){
    $('.searchBox').fadeIn("slow");
    //Activate the Searchbox
    $('input.typeahead').typeahead({
        name: 'accounts',
        local: ['AMBA', 'Antártida', 'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Córdoba', 'Entre Ríos', 'La Pampa', 'La Rioja','Mendoza','Misiones', 'Neuquén', 'San Juan', 'San Luis', 'Santa Fe', 'Santa Cruz', 'Santiago del Estero', 'Tucumán', 'Chubut', 'Corrientes', 'Formosa', 'Islas Malvinas', 'Jujuy', 'Río Negro', 'Salta', 'América', 'Argentina Bicontinental', 'Planisferio', 'Tierra del Fuego']
    });

    $('#searchBox').keydown(function(e){
        if(e.keyCode == 13){
            e.preventDefault();
            buscaMapa(adaptarTexto($('#searchBox').next().text()));
        }
    });

    $('#search').click(function(){
        buscaMapa(adaptarTexto($('#searchBox').next().text()));
    });
});

$(".otrosMapas").click(function() {
    var nombreMapa = adaptarTexto($(this).attr("alt"));
    buscaMapa(nombreMapa);
});

$('.test4').click(function(){
    window.location.href='tutorial.html';
})
$('.mask2').click(function(){
    $('.animatedMenu').fadeOut("slow");
});

// Activate side map
$(document).ready(function(e) {
    // Display ImageMap
     $('#mapaArgentinaBicontinental').fadeIn("slow");
     /*
    // Recalculate imageMap MapButtons
    $('img[usemap]').rwdImageMaps();
    // Hilight MapButtons
    $('.map').maphilight();
    */
    // Script that makes tutorial pop up how up
    var $tourcontrols  = '<div id="tourcontrols" class="tourcontrols">';
        $tourcontrols += '<p>Realizá un paseo por las herramientas y aprendé a hacer tus mapas</p>';
        $tourcontrols += '<span class="button" id="activatetour">Comenzar</span> <span class="button" id="dismisstour">No, gracias</span>';
        $tourcontrols += '</div>';

        $('BODY').prepend($tourcontrols);
        //$('#tourcontrols').animate({'right':'230px'},500);
        $('#tourcontrols').animate({'position': 'fixed' , 'top': '40%' , 'right':'40%'} ,500);

});
// fin archivo menu de mapas
