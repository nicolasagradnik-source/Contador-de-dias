const Evento=("Mi cumple");
const fecha=("2027-4-15");
console.log("Evento:" ,Evento);
const hoy = new Date();
const cumple = new Date("2027-4-15");
const dias= (cumple-hoy) / (8.64e+7)
const diasRedondeados = Math.round (dias)
const dia = (dias)  
if (diasRedondeados < 0) {
 console.log("Ya pasó hace", ((Math.round (dias * -1))), "días");
} else if (diasRedondeados === 0) {
 console.log ("¡Es hoy! 🎉");
} else if (diasRedondeados === 1) {
  console.log("falta 1  día");
} else if(diasRedondeados <= 7) {
  console.log("¡Ya casi!");
} else if (diasRedondeados >= 100) {
  console.log("Uff, falta un monton");
} else {
 console.log("Faltan", ((Math.round (dias))), "días");
}
