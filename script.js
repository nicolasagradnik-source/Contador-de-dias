const Evento=("Mi cumple");
console.log("Evento:" ,Evento);
const cumple = new Date("2027-4-15");
const diaDeLaSemana = cumple.getDay();
if (diaDeLaSemana === 0  || diaDeLaSemana === 6) {
  console.log("Es fin de Semana 🥳");
}
function calcularDiasQueFaltan(fecha) {
  const hoy = new Date();
  const dias = (fecha - hoy) / (8.64e+7);
  return  Math.round (dias);
}
function armarMensaje(dias, nombreEvento) {

if (dias < 0) {
 return("Ya pasó hace " + ((Math.round (dias * -1))) + " días");
} else if (dias === 0) {
 return("¡Es hoy! 🎉");
} else if (dias === 1) {
 return("falta 1  día");
} else if (dias >= 2 && dias  <= 7) {
 return("¡Ya casi!");
} else if (dias >= 100) {
  return("Uff, falta un montón");
} else {
 return("Faltan " + ((Math.round (dias))) + " días");
}
}
const diasQueFaltan = calcularDiasQueFaltan(cumple); 
const mensaje = armarMensaje(diasQueFaltan, Evento);
 console.log(mensaje);

