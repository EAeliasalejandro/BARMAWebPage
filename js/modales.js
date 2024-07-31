
document.addEventListener('DOMContentLoaded', function () {
    var tituloModalUno = document.querySelector('.tituloModalUno');
    var descripcionModalUno = document.querySelector('.descripcionModalUno');
    var tituloModalDos = document.querySelector('.tituloModalDos');
    var tituloModalTres = document.querySelector('.tituloModalTres');
    var tituloModalCuatro = document.querySelector('.tituloModalCuatro');
    var tituloModalCinco = document.querySelector('.tituloModalCinco');
    var tituloModalSeis = document.querySelector('.tituloModalSeis');
    
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

    var titulosCinco = [
        'Pavimentos',
        'Pisos pulidos',
        'Pisos pulidos'
    ];
    
    var titulosSeis = [
        'Pisos oxidados',
        'Pisos estampados oxidados',
        'Pisos estampados'
    ];

    $('#carouselExampleIndicatorsUno').on('slide.bs.carousel', function (event) {
        var index = event.to;
        tituloModalUno.textContent = titulosUno[index];
        descripcionModalUno.textContent = descripciones[index];
    });
    $('#carouselExampleIndicatorsDos').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalDos.textContent = titulosDos[index];
    });
    $('#carouselExampleIndicatorsTres').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalTres.textContent = titulosTres[index];
    });
    $('#carouselExampleIndicatorsCuatro').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalCuatro.textContent = titulosCuatro[index];
    });
    $('#carouselExampleIndicatorsCinco').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalCinco.textContent = titulosCinco[index];
    });
    $('#carouselExampleIndicatorsSeis').on('slide.bs.carousel', function (event) {        
        var index = event.to;
        tituloModalSeis.textContent = titulosSeis[index];
    });
});
