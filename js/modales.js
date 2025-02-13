
document.addEventListener('DOMContentLoaded', function () {
    var tituloModalUno = document.querySelector('.tituloModalUno');
    var descripcionModalUno = document.querySelector('.descripcionModalUno');
    var tituloModalDos = document.querySelector('.tituloModalDos');
    var descripcionModalDos = document.querySelector('.descripcionModalDos');
    var tituloModalTres = document.querySelector('.tituloModalTres');
    var tituloModalCuatro = document.querySelector('.tituloModalCuatro');
    var descripcionModalCuatro = document.querySelector('.descripcionModalCuatro');
    var tituloModalCinco = document.querySelector('.tituloModalCinco');
    var descripcionModalCinco = document.querySelector('.descripcionModalCinco');
    var tituloModalSeis = document.querySelector('.tituloModalSeis');
    var descripcionModalSeis= document.querySelector('.descripcionModalSeis');
    
    var titulosUno = [
        'Construcción de pozos de visita',
        'Excavaciones',
        'Rellenos',
        'Colocación de tubería'
    ];
    
    var descripciones = [
        'Obra de drenajes, en proyecto Juanicipio, fresnillo, Zac.',
        'Excavaciones para colocación de tuberías 4 m de profundidad de 15 pulg. Juanicipio, fresnillo, Zac.',
        'Colocación de tubería para drenajes de 15 pulg. Juanicipio, fresnillo, Zac.',
        'Colocación de tubería para drenajes de 15 pulg. Juanicipio, fresnillo, Zac.'
    ];

    var titulosDos = [
        'Colado de vialidades',
        'Colado de banquetas',
        'Construcción de guarniciones',
        'Cimbrado y armado de losa',
        'Pintura en vialidades',
        'Construcción de muros'
    ];

    var descripcionesDos = [
        'Colado de vialidades de concreto en Municipios con terminado texturizado, estado de Zacatecas.',
        'Colado de banquetas de concreto acabados, texturizado, escobillado. Proyecto de urbanización, Grupo Modelo, Apan Hidalgo.',
        'Colado de guaniciones de concreto tipo pecho paloma, construido 14 km de guarnición, con maquina Power Curbers unica en el estado de Zacatecas, Proyecto Juanicipio, Minera Juanicipio, Fresnillo, Zac.',
        'Cimbra para losa aligeradas, Poyecto 1200 m2 de losa armada y través de carga, armado de acero de refuerzo y colado, Los Haro, Jerez. Zac.',
        'Colocación de pintura termo-plástica trafico en proyecto Juanicipio, área boca mina, Peñoles área proyectos, Minera Juanicipio, Fresnillo, Zac.',
        'Construcción de muros de block de 5 metros de altura, aparente. Los Haro, Jerez.'
    ];

    var titulosTres = [
        'Conformación de vialidades',
        'Afine y nivelación',
        'Cortes de material',
        'Conformación de plataformas'
    ];

    var titulosCuatro = [
        'Armado de acero',
        'Construcción de muros de concreto',
        'Cimbrado de columnas'
    ];

    var descripcionesCuatro = [
        'Construcción de cimentación a base de concreto armado para tanques de clorificacntes en grupo modelo, planta centro, Apan, Hidalgo.',
        'Construcción de muros de concreto, para contención de taludes, generando proyectos de ingeniería estructural, planeación y posterior ejecución para minera juanicipio, frenillo, Zac',
        'Armado y cimbrado de columnas de concreto 4 mts de altura para salón de eventos Los Haro, jerez, Zac.'
    ];

    var titulosCinco = [
        'Pavimentos',
        'Pisos pulidos',
        'Pisos pulidos'
    ];

    var descripcionesCinco = [
        'Colado de pisos de concreto masivos, volumnes de mas de 2500 m2 de colado en un dia con terminado texturizado Planta de beneficio en minera Juanicipio, Frenillo Zac',
        'Colado de pisos de concreto con terminado pulido para edificios de Químicos peligros, Minera Juanicipio, Fresnillo, Zac.',
        'Colados de pisos de concreto con terminado pulido, proyecto edificios en minera juanicipio, frenillo, Zac.'
    ];
    
    var titulosSeis = [
        'Pisos oxidados',
        'Pisos estampados oxidados',
        'Pisos estampados'
    ];

    var descripcionesSeis = [
        'Pisos con acabado pulido espejo, posteriormente se le aplica un oxido con diferentes colores, se le aplica un brillo, Salon de eventos el AG, Fresnillo, Zac.',
        'Colado de vialidades con terminado estampado y oxidado con diferentes tonalidades en fraccionamiento lomas de solidaridad, Guadalupe, Zac.',
        'Colado de pisos decorativos, estampados, acabados de alta calidad, pisos con color eduresedor con apli catalogo de colores y posteriormente sellado con sellador acrílico de alta adherente, Casa habitación, frenillo, Zac.'
    ];

    $('#carouselExampleIndicatorsUno').on('slide.bs.carousel', function (event) {
        var index = event.to;
        tituloModalUno.textContent = titulosUno[index];
        descripcionModalUno.textContent = descripciones[index];
    });
    $('#carouselExampleIndicatorsDos').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalDos.textContent = titulosDos[index];
        descripcionModalDos.textContent = descripcionesDos[index];
    });
    $('#carouselExampleIndicatorsTres').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalTres.textContent = titulosTres[index];
    });
    $('#carouselExampleIndicatorsCuatro').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalCuatro.textContent = titulosCuatro[index];
        descripcionModalCuatro.textContent = descripcionesCuatro[index];
    });
    $('#carouselExampleIndicatorsCinco').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalCinco.textContent = titulosCinco[index];
        descripcionModalCinco.textContent = descripcionesCinco[index];
    });
    $('#carouselExampleIndicatorsSeis').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalSeis.textContent = titulosSeis[index];
        descripcionModalSeis.textContent = descripcionesSeis[index];
    });
});
