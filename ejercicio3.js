const prompt = require('prompt-sync')();
let opcion;

do {

  console.log("\n--- MENÚ NEQUI ---");
  console.log("1) Ver saldo");
  console.log("2) Enviar dinero");
  console.log("3) Recargar");
  console.log("4) Salir");
  
  opcion = prompt("Elige una opción: ");

  if (opcion === "1") {
    console.log("Tu saldo actual es de $45.000 pesos.");
  } else if (opcion === "2") {
    console.log("Redirigiendo a Enviar dinero...");
  } else if (opcion === "3") {
    console.log("Redirigiendo a Recargar...");
  } else if (opcion === "4") {
    console.log("Saliendo de la app. ¡Gracias por usar Nequi!");
  } else {
    console.log("Opción no válida. Intenta de nuevo.");
  }

} while (opcion !== "4");