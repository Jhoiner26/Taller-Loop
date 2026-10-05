const usuarios = [
  { nombre: "Jhoiner", movimientos: [20000, -5000, -2000] },
  { nombre: "Pepito", movimientos: [50000, -10000, 15000] },
  { nombre: "Papitas", movimientos: [100000, -50000, -20000] }
];

console.log("--- CALCULANDO TOTALES POR USUARIO ---");

for (let i = 0; i < usuarios.length; i++) {
  let usuarioActual = usuarios[i];
  let totalUsuario = 0;

  for (let j = 0; j < usuarioActual.movimientos.length; j++) {
    totalUsuario += usuarioActual.movimientos[j];
  }

  console.log(`Usuario: ${usuarioActual.nombre} -> Total en cuenta: $${totalUsuario}`);
}
