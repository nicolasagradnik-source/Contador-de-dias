const Evento=("Mi cumple");
const fecha=("2027-4-15");
console.log("Evento:" ,Evento);
const amigos = 4;
const caramelos = 11;
const porAmigo = caramelos / amigos;
console.log(porAmigo ,Math.round (porAmigo));
const hoy = new Date();
console.log(hoy);
const cumple = new Date("2027-4-15");
console.log(cumple);
console.log(cumple - hoy);
const dias= (cumple-hoy) / (8.64e+7)
console.log ("Faltan" , ( (Math.round (dias))) , "días para", Evento)
console.log (Math.round (dias));

