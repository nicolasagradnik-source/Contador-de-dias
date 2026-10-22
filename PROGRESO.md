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

## Próxima clase
Clase 3: if / else. Misión: si faltan 0 días → "¡Es hoy! 🎉"; si ya pasó → "Ya pasó hace X días"; si no → "Faltan X días".
