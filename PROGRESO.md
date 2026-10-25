# Progreso de Nico

Proyecto: contador de días hasta una fecha (JavaScript en el navegador: `index.html` + `script.js`).

## Clase 1: Variables y tipos de datos (completada)

**Qué vio**
- Una variable es una caja con nombre que guarda algo.
- `const` (no cambia) y `let` (cambia).
- Tipos: texto (con comillas), número, true/false.
- `console.log(...)` para mostrar cosas; abrir la consola del navegador (Ctrl + Shift + J).
- Diferencia entre `console.log(caja)` y `console.log("texto")`.
- Git: instaló Git, configuró nombre y mail solo para este repo, y usó `git status`, `git add .`, `git commit -m` y `git push -u origin main`.

**Qué logró**
- Armó `index.html` + `script.js` y los abrió en el navegador.
- Creó las cajas `Evento` y `fecha` y mostró `Evento: Mi cumple` en la consola.
- Primer commit y primer push a su GitHub (nicolasagradnik-source/Contador-de-dias), con autor Nicolas Agradnik.

**Qué le costó**
- Distinguir el nombre de una caja (sin comillas) del texto que se muestra (con comillas).
- Que un nombre de caja no puede tener espacios.
- Entender que el código se mira en el navegador y no en VS Code (guardar con Ctrl + S, recargar con F5).
- La fecha escrita sin comillas (`2027-4-15`) se calcula como una resta.

**Chequeo final**
- `let` vs `const`: bien (lo explicó con el puntaje de un juego).
- Fecha con comillas vs resta: bien.
- `console.log(Evento)` vs `console.log("Evento")`: respondió al revés la primera vez; después lo practicó en su código.

## Clase 2: Operaciones y fechas (completada)

**Qué vio**
- Operaciones con números (`+ - * /`) y guardar el resultado en una caja.
- `Math.round(...)` para redondear.
- Fechas: `new Date()` es el momento actual; `new Date("2027-04-15")` es esa fecha. Restar dos fechas da milisegundos.
- Convertir milisegundos a días dividiendo por `8.64e+7` (milisegundos de un día).
- Mezclar texto y variables en un `console.log` separándolos con comas.
- `<meta charset="UTF-8">` en `index.html` para que las tildes se vean bien.

**Qué logró**
- Mensaje en la consola: `Faltan 174 días para Mi cumple`, calculado a partir de la fecha de hoy.
- Entendió por qué da 174 y no 175 (`new Date()` incluye la hora de ahora).
- Commit y push de la clase 2 hechos por él.

**Qué le costó**
- Escribir a mano un valor que ya estaba en una caja (el número dentro de `Math.round`, la fecha de hoy): lo corrigió con ayuda.
- Poner comillas por error en un nombre de caja (`Math.round("días")` dio `NaN`).
- El orden: crear la caja antes de usarla.
- Separar las piezas de un `console.log` con comas, y confundir `x` con `*` para multiplicar.
- Tildes en nombres de variables (`días`) y mojibake (`dÃas`).

**Chequeo final**
- Por qué se divide por `8.64e+7`: entendió que convierte a días; se completó con que son los milisegundos de un día.
- `Math.round`: bien. Por qué la caja va antes del `console.log`: bien.

**Pendiente**
- Dejar prolijo `script.js`: sacar los `console.log` de prueba (caramelos, `hoy`, `cumple`) y poner la tilde en "días" del mensaje.
- Nombres de variables: empezar con minúscula (`evento`, no `Evento`), sin tildes ni `ñ`, y que diga qué guardan.
- Usar la caja `fecha` en vez de repetir `"2027-4-15"` en `new Date(...)`, y escribir la fecha como `"2027-04-15"`.
- Mensajes de commit más cortos.

## Clase 3: if / else (completada)

**Qué vio**
- `if / else`: el programa elige qué hacer según una condición.
- Comparaciones: `<`, `>`, `>=`, `===`. Un solo `=` guarda en una caja, `===` compara.
- Llaves `{ }`: cada una que se abre tiene que cerrarse.
- Encadenar decisiones con `else if` (lo descubrió él; se profundiza en la clase 4).

**Qué logró**
- Los tres mensajes de la misión: `Faltan X días`, `Ya pasó hace X días` y `¡Es hoy! 🎉`.
- Descubrió solo por qué `dias === 0` no funcionaba (los días tienen decimales) y lo arregló con `diasRedondeados`.
- Limpió `script.js` borrando los `console.log` de prueba y la parte de los caramelos.
- Commit y push de la clase 3 hechos por él.

**Qué le costó**
- Separar las piezas de un `console.log` con comas (se repitió).
- Usar `=` en vez de `===` en una comparación.
- Contar las llaves al anidar un `if` adentro de un `else`.
- Hacer cambios en el bloque equivocado (el `* -1` en el `else` en vez del `if`); se perdió y volvió a un estado que andaba.
- Crear una caja dentro de un `if` y querer usarla afuera.

**Pendiente**
- Responder el chequeo de la clase 3: para qué sirve `if / else`, por qué `===` y no `=`, por qué `dias === 0` fallaba.
- Revisar la fecha real del evento en `script.js` (la última era de prueba).
- Nombres de variables: empezar con minúscula (`evento`), sin tildes ni `ñ`.
- Usar la caja `fecha` en vez de repetir la fecha en `new Date(...)`, y usar `diasRedondeados` también en los mensajes. Revisar si hace falta la caja `dia`, que repite `dias`.
- Escribir las fechas completas (`"2027-04-15"`).

## Clase 4: else if y casos especiales (completada)

**Qué vio**
- Cadenas de `if / else if / else`: se revisan de arriba hacia abajo y gana la primera condición verdadera, por eso **el orden importa** (el caso específico "1 día" va antes que el rango "menos de 7").
- Un solo `if` al principio y un solo `else` al final; los `else if` van en el medio.
- Adelanto de `&&` ("y"), que se ve en la clase 5.

**Qué logró**
- Una sola cadena con todos los casos: ya pasó, es hoy, falta 1 día, ¡Ya casi!, Uff falta un montón y Faltan X días.
- Encontró solo un bug: con la fecha de hoy salía "Ya pasó hace 0 días", porque `dia < 0` comparaba el número con decimales; lo resolvió comparando `diasRedondeados`.
- Commit y push de la clase 4 hechos por él.

**Qué le costó**
- Mezclar el ejemplo de la clase (notas, pizzas) con su código, y copiar nombres de cajas del ejemplo.
- Tener dos cadenas de `if` separadas, que muestran dos mensajes; juntarlas en una sola.
- Elegir la caja correcta en la comparación (puso `hoy` en vez de `diasRedondeados`).
- Escribir la fecha completa (`"2020-1-"` daba `NaN`).
- Se frustró y pidió ayuda cuando tenía muchos cambios juntos: funciona mejor de a un paso.

**Pendiente**
- Responder el chequeo de las clases 3 y 4 (orden de los `else if`, qué pasa si se cumplen varios, por qué `diasRedondeados` en vez de `dia`).
- Pulir mensajes: `Falta 1 día` (mayúscula y un solo espacio), `montón` con tilde, y decidir si "¡Ya casi!" es `< 7` o `<= 7`.
- Limpiar `script.js`: las cajas `fecha` y `dia` no se usan; usar `diasRedondeados` también en los mensajes; nombres con minúscula (`evento`).
- Escribir fechas completas con formato `"2027-04-15"`.
- Mensajes de commit que cuenten qué hizo (el de la clase 4 dice "if y else").

## Próxima clase
Clase 5: operadores lógicos (`&&`, `||`, `!`). Misión: mensaje especial si faltan entre 1 y 7 días; avisar si el evento cae un fin de semana.
