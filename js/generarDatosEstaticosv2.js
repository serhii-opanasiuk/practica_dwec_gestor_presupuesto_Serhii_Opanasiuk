import * as gestionPresupuestosWeb2 from './gestionPresupuestoWebv2.js';
import * as gestionPresupuesto from './gestionPresupuesto.js';
//*Actualizar el presupuesto a 1500€ (función actualizarPresupuesto)
gestionPresupuesto.actualizarPresupuesto(1500);
//*Mostrar el presupuesto en el div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
gestionPresupuestosWeb2.mostrarDatoEnId(gestionPresupuesto.mostrarPresupuesto(), "h1","presupuesto");
//*Crear los siguientes gastos (función crearGasto):
let gasto1 = new gestionPresupuesto.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let gasto2 = new gestionPresupuesto.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let gasto3 = new gestionPresupuesto.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let gasto4 = new gestionPresupuesto.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let gasto5 = new gestionPresupuesto.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let gasto6 = new gestionPresupuesto.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");
//*Añadir los gastos creados (función anyadirGasto):
gestionPresupuesto.anyadirGasto(gasto1);
gestionPresupuesto.anyadirGasto(gasto2);
gestionPresupuesto.anyadirGasto(gasto3);
gestionPresupuesto.anyadirGasto(gasto4);
gestionPresupuesto.anyadirGasto(gasto5);
gestionPresupuesto.anyadirGasto(gasto6);
//*Mostrar los gastos totales en div#gastos-totales (funciones calcularTotalGastos y mostrarDatoEnId)
gestionPresupuestosWeb2.mostrarDatoEnId(gestionPresupuesto.mostrargastosTotales(), "h2", "gastos-totales");
//*Mostrar el balance total en div#balance-total (funciones calcularBalance y mostrarDatoEnId)
gestionPresupuestosWeb2.mostrarDatoEnId(gestionPresupuesto.mostrarBalance(), "h2", "balance-total");
//*Mostrar el listado completo de gastos en div#listado-gastos-completo (funciones listarGastos y mostrarGastoWeb)
let gastos = gestionPresupuesto.listarGastos();
let divGastosHtml = document.getElementById("listado-gastos-completo");
for (let gasto of gastos) {
    let gastoCorriente = document.createElement('mi-gasto');
    gastoCorriente.gasto = gasto;
    divGastosHtml.append(gastoCorriente);
}

