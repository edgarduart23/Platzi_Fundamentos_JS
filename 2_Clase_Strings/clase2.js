var nombre= 'Edgardo', apellido= 'Duarte';
var nombreEnMayusculas =  nombre.toUpperCase();
var apellidoEnMinisculas = apellido.toLowerCase();
var primeraLetraDelTNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

//var nombreCompleto= nombre + ' ' + apellido;
var nombreCompleto= `${nombre} ${apellido.toUpperCase()}`
//var str= nombre.charAt(1) + nombre.charAt(2);
var str= nombre.substr(1,2);
//var ultimaLetra= nombre.substr(nombre.length-1);
//var ultimaLetra= nombre.substr(-1);
var ultimaLetra= nombre.charAt(nombre.length-1);
