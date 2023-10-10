/**
 * Mi dia a dia
 * 
 * Vamos a escribir un programa que muestre, para cada hora del dia, que actividad realiza un sim en Villa Lobo.
 * Muestra qué actividad realiza la persona por el terminal PARA CADA HORA.
 * 
 * 1. A las 8, el sim se despierta
 * 2. A las 9, el sim desayuna
 * 3. De 10 a 16, el sim estudia Front End
 * 4. A las 17, siesta
 * 5. De 18 a 22, el sim tiene tiempo libre
 * 6. A las 22, el sim cena
 * 7. A las 23, el sim se va a dormir
 *
 * Escribe un bucle, con los condicionales adecuados dentro del bucle, para que muestre por el terminal lo que hace el sim a cada hora.
 * 
 * Ejemplo:
 * 
 * "A las 8, el sim se despierta"
 * "A las 9, el sim desayuna" 
 * "A las 10, el sim estudia Front End"
 * "A las 11, el sim estudia Front End"
 * ....
 * "A las 23, el sim se va a dormir"
 */

let hora_actual = 8;
let hora_dormir = 24;

for (let i = hora_actual; i < 24; i++) {
    if (i == 8) {
        console.log(`A las ${i}, el sim se despierta`);
    } else if (i == 9) {
        console.log(`A las ${i}, el sim desayuna`);
    } else if (i >= 10 && i <= 16) {
        console.log(`A las ${i}, el sim estudia Front End`);
    } else if (i == 17) {
        console.log(`A las ${i}, el sim se echa una siesta`);
    } else if (i >= 18 && i <= 22) {
        console.log(`A las ${i}, el sim cena`);
    } else if (i == 23) {
        console.log(`A las ${i}, el sim se va a dormir`);
    }
}
