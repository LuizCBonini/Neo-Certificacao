$(document).ready(function() {
    
    var car = [

        {

            "marca": "BMW",

            "modelo" : "Z4 coup",

            "ano": "2007",

            "cor": "laranja",

            "placa": "NEJ-6420"

        },

        {

            "marca": "Honda",

            "modelo" : "Accord Coupe EX",

            "ano": "1991",

            "cor": "Preto",

            "placa": "NEJ-5085"

        },

        {

            "marca": "Peugeot",

            "modelo" : "207 Sedan Passion XR 1.4 Flex 8V 4p",

            "ano": "2009",

            "cor": "Bege",

            "placa": "NES-0659"

        },

        {

            "marca": "Fiat",

            "modelo" : "MOBI Like 1.0 Fire Flex 5p.",

            "ano": "2017",

            "cor": "Cinza",

            "placa": "NEP-1151"

        },

        {

            "marca": "Ford",

            "modelo" : "Ranger XLS 3.2 20V 4x4 CD Diesel Mec.",

            "ano": "2013",

            "cor": "Verde",

            "placa": "NFA-5128"

        },

    ]
    
    $(".button-search").on('click', function() {

        var search = $("#inputCar").val();
        var searchCar = search.toUpperCase()

        car.forEach(function (e){
            if (searchCar == e.placa) {
                $('.modalCar').append(
                    "<h1>Placa: "+e.placa+"</h1>"+
                    "<p>Modelo: "+e.modelo+"</p>"+
                    "<p>Marca: "+e.marca+"</p>"+
                    "<p>Ano: "+e.ano+"</p>"+
                    "<p>Cor: "+e.cor+"</p>"
                );
            }
        })

        $('.modalCar').modal('show');
    })

    $('.closeCar').on('click', function() {
        $('.modalCar').modal('hide');
    })
})



// $('.modal').append("<h1>"+e.placa+"</h1>");


// $(document).ready(function() {
    
//     var car = [{"placa": "hh3"}, {"placa": "rr9"}]

//     $(".button-search").click(function() {
//         var searchCar = $(this).val().toLowerCase();
//         $(car).filter(function() {
//             $('.modal').append("<h1>"+$(this).text().toLowerCase().indexOf(searchCar)+"</h1>");
//         })
//     })
// })


// $('.modal').append("<h1>"+car[].placa+"</h1>");


// $(this).text().toLowerCase().indexOf(searchCar)