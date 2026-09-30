$(document).ready(function () {
      $('path').click(function() {
            var nombreProvincia = $(this).attr('nombre');
            $('#provincia').html(nombreProvincia);
            switch (nombreProvincia) {
                  case "Ciudad de Buenos Aires":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar018_CABA_2000x2500.png');
                  break;
                  case "La Pampa":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar007_LaPampa_2000x2500.png');
                  break;
                  case "Mendoza":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar009_Mendoza_2000x2500.png');
                  break;
                  case "Río Negro":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar023_RioNegro_2500x2000.png');
                  break;
                  case "Chubut":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar018_Chubut_2500x2000.png');
                  break;
                  case "Buenos Aires":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar002_BsAs_2000x2500.png');
                  break;
                  case "Córdoba":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar005_Cordoba_2000x2500.png');
                  break;
                  case "San Luis":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar013_SanLuis_2000x2500.png');
                  break;
                  case "Entre Ríos":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar006_EntreRios_2000x2500.png');
                  break;
                  case "Santa Fe":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar014_SantaFe_2000x2500.png');
                  break;
                  case "San Juan":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar012_SanJuan_2000x2500.png');
                  break;
                  case "La Rioja":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar008_LaRioja_2000x2500.png');
                  break;
                  case "Catamarca":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar003_Catamarca_2000x2500.png');
                  break;
                  case "Neuquén":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar011_Neuquén_2000x2500.png');
                  break;
                  case "Santa Cruz":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar015_SantaCruz_2000x2500.png');
                  break;
                  case "Santiago del Estero":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar016_SantiagoDelEstero_2000x2500.png');
                  break;
                  case "Tucumán":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar017_Tucuman_2000x2500.png');
                  break;
                  case "Jujuy":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar022_Jujuy_2500x2000.png');
                  break;
                  case "Salta":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar023_Salta_2500x2000.png');
                  break;
                  case "Misiones":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar010_Misiones_2000x2500.png');
                  break;
                  case "Corrientes":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar019_Corrientes_2500x2000.png');
                  break;
                  case "Chaco":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar004_Chaco_2000x2500.png');
                  break;
                  case "Formosa":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar020_Formosa_2500x2000.png');
                  break;
                  case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
                        changeMap('https://mapasescolares.ign.gob.ar/images/mapas/MapaEscolar000_TIerraDelFuego_2000x2500.png');
                  break;
                  default:
                    // nada
            }
      })
});
