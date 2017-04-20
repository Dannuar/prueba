var app = angular.module('gpiApp', [ ]);

app.controller('ctrlApp', function($scope){
	$scope.persona = personasData;
	$scope.carro = carrosData;

});



personasData = 
{
	"nombre" : "Daniel",
	"paterno" : "Nuñez",
	"materno" : "Arce",
	"fecha" : "12-Diciembre-1993",
	"imagen" : "img/hombre.jpg"
}


carrosData =[
{
	"marca" : "Chevrolet",
	"modelo" : "Sonic",
	"tiempo" : 2014,
	"color" : "negro"

},
{
	"marca" : "Chevrolet",
	"modelo" : "Aveo",
	"tiempo" : 2016,
	"color" : "gris"
},
{
	"marca" : "Nissan",
	"modelo" : "Tiida",
	"tiempo" : 2012,
	"color" : "cafe"
}]