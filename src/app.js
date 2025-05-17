import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//  window.onload = function() {
//   //write your code here
//    Creardominio()
//    textArea.value = dominio.join('\n');
//  };


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let exten = ['.com', '.net', '.us', '.io'];
let dominio = [];
const input = document.getElementById("contadorDominios");
const textArea = document.getElementById("contenedorDominios");
const btn = document.getElementById("generarDominios");



btn.addEventListener('click', function () {
  Creardominio();
  
  
})
function Creardominio() {
  //RECORRE EL 1 ARRAY
  for (let i = 0; i <= pronoun.length - 1; i++) {
    // RECORRE EL 2 ARRAY
    for (let x = 0; x <= adj.length - 1; x++) {
      // RECORRE EL 3 ARRAY
      for (let y = 0; y <= noun.length - 1; y++) {
       
        // RECORRE EL 4 ARRAY
        for (let z = 0; z <= exten.length - 1; z++) {
          // SE LE AÑADE AL NUEVO ARRAY CADA DOMINIO GENERADO
          
          dominio.push(pronoun[i] + adj[x] + noun[y] + exten[z])
          

        }
      }
    }
  }
  // PARA QUE SE VEA LOS DOMINIOS EN EL TEXTAREA
 textArea.value = dominio.join('\n');
 input.value =  dominio.length;
  console.log(dominio)
}
