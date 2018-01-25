'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
//import { platzom } from 'platzom'
//export default function platzom(str) --> import platzom from 'platzom'
function platzom(str) {
  var translation = str;
  // si la palabra es un palindromo(se lee igual de adelante hacia atras o vicibersa)
  // ninguna regla anteriro cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  }; //divide el strin en un array de caracteres asi podra tener la funcion de reverse y luegoo los junta en un string devuelta

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i); //extrae un caracter de la cadena segun su posicion
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  //si la palabra termina en ar se le quita esos 2 CARACTERES
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2); //desde el inicio pero quitar del final -2
  }
  // si la palabra inicia con z se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  // si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion del medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2)); // desde el inicio hasta la mitad
    var secondHalf = translation.slice(Math.round(length / 2)); // sin segundo parametro tomara desde partida hasta el final
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}