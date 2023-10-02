import {banderas} from "./banderas-Assets/ObjetoConbanderas.js";

export function mostrarPrecio(precio) {
  if(precio === 1){
    return "$"
  } else if(precio === 2){
    return "$$"
  } else if(precio === 3){
    return "$$$"
  } else if(precio === 4){
    return "$$$$"
  }
}

export function mostrarBandera(paisElegido) {
  let banderaDevuelta;
  if(paisElegido.toLowerCase() === "argentina"){
    banderaDevuelta = banderas.Argentina;
    return banderaDevuelta;
  } else if(paisElegido.toLowerCase() === "uruguay"){
    banderaDevuelta = banderas.Uruguay;
    return banderaDevuelta;
  } else if(paisElegido.toLowerCase() === "brasil"){
    banderaDevuelta = banderas.Brasil;
    return banderaDevuelta;
  } else if(paisElegido.toLowerCase() === "chile"){
    banderaDevuelta = banderas.Chile;
    return banderaDevuelta;
  } 
}
