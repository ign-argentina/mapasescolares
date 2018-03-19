$(document).ready(function () {
      $('path').click(function() {
            var nombreProvincia = $(this).attr('nombre');
            $('#provincia').html(nombreProvincia);
            switch (nombreProvincia) {
                  case "Ciudad de Buenos Aires":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar018_CABA_2000x2500.png');
                  break;
                  case "La Pampa":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar007_LaPampa_2000x2500.png');
                  break;
                  case "Mendoza":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar009_Mendoza_2000x2500.png');
                  break;
                  case "Río Negro":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar023_RioNegro_2500x2000.png');
                  break;
                  case "Chubut":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar018_Chubut_2500x2000.png');
                  break;
                  case "Buenos Aires":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar002_BsAs_2000x2500.png');
                  break;
                  case "Córdoba":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar005_Cordoba_2000x2500.png');
                  break;
                  case "San Luis":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar013_SanLuis_2000x2500.png');
                  break;
                  case "Entre Ríos":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar006_EntreRios_2000x2500.png');
                  break;
                  case "Santa Fe":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar014_SantaFe_2000x2500.png');
                  break;
                  case "San Juan":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar012_SanJuan_2000x2500.png');
                  break;
                  case "La Rioja":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar008_LaRioja_2000x2500.png');
                  break;
                  case "Catamarca":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar003_Catamarca_2000x2500.png');
                  break;
                  case "Neuquén":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar011_Neuquén_2000x2500.png');
                  break;
                  case "Santa Cruz":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar015_SantaCruz_2000x2500.png');
                  break;
                  case "Santiago del Estero":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar016_SantiagoDelEstero_2000x2500.png');
                  break;
                  case "Tucumán":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar017_Tucuman_2000x2500.png');
                  break;
                  case "Jujuy":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar022_Jujuy_2500x2000.png');
                  break;
                  case "Salta":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar023_Salta_2500x2000.png');
                  break;
                  case "Misiones":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar010_Misiones_2000x2500.png');
                  break;
                  case "Corrientes":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar019_Corrientes_2500x2000.png');
                  break;
                  case "Chaco":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar004_Chaco_2000x2500.png');
                  break;
                  case "Formosa":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar020_Formosa_2500x2000.png');
                  break;
                  case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
                        changeMap('http://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar000_TIerraDelFuego_2000x2500.png');
                  break;
                  default:
                    // nada
            }
      })
});
