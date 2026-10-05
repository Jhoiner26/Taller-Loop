const movimientos = [20000, -5000, 45000, -10000, -2000, 1000000];

let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {

    total += movimientos[i];

    if (movimientos[i] < 0) {
        cantidadRetiros++;
    }
}

console.log("Total en la cuenta:", total);
console.log("Cantidad de retiros:", cantidadRetiros);

