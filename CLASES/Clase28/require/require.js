const {series,peliculas} = require ("./exportaciones");  //psrs usar require, por buena practica, se debe indicar en package.json "type":"commonjs" aunque si no se indica funciona igual por ser nativo.
// import { series, peliculas } from "./exportaciones"; //para usar import se debe indicar en package.json "type":"modules"
console.log(peliculas);