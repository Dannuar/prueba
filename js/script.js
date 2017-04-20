var app = angular.module('gpiApp', [ ]);

app.controller('ctrlApp', function($scope){
	$scope.persona = personasData;
});


var personasData = {
	nombre:"Daniel",
	paterno:"Nuñez",
	materno:"Arce",
	fecha: "12-Diciembre-1993",
	imagen: "img/hombre.jpg"
}