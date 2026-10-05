// 22. Lista de movimientos variada (incluye ceros y pagos)
const movimientos = [0, -20000, 15000, 0, -50000, 120000, 3000];

console.log("Iniciando búsqueda y filtrado de movimientos...");

for (let i = 0; i < movimientos.length; i++) {
  
  if (movimientos[i] === 0) {
    continue; 
  }

  if (movimientos[i] === 120000) {
    console.log(`¡Pago a comercio encontrado en la posición [${i}] con un valor de ${movimientos[i]}!`);
    break; 
  console.log(`Revisando movimiento válido: ${movimientos[i]}`);
}
}