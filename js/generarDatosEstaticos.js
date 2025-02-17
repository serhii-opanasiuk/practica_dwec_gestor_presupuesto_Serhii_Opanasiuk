import * as gestionPresupuestosWeb from './gestionPresupuestoWeb.js';
import * as gestionPresupuesto from './gestionPresupuesto.js';
//*Actualizar el presupuesto a 1500€ (función actualizarPresupuesto)
gestionPresupuesto.actualizarPresupuesto(1500);
//*Mostrar el presupuesto en el div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
gestionPresupuestosWeb.mostrarDatoEnId(gestionPresupuesto.mostrarPresupuesto(), "presupuesto");
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
gestionPresupuestosWeb.mostrarDatoEnId(gestionPresupuesto.mostrargastosTotales(), "gastos-totales");
//*Mostrar el balance total en div#balance-total (funciones calcularBalance y mostrarDatoEnId)
gestionPresupuestosWeb.mostrarDatoEnId(gestionPresupuesto.mostrarBalance(), "balance-total");
//*Mostrar el listado completo de gastos en div#listado-gastos-completo (funciones listarGastos y mostrarGastoWeb)
let gastos = gestionPresupuesto.listarGastos();
for (let gasto of gastos) {
    gestionPresupuestosWeb.mostrarGastoWeb("listado-gastos-completo", gasto);
    let divGastos = document.getElementById("listado-gastos-completo").lastChild;
    let botonEditar = gestionPresupuestosWeb.anyadirBotonEditar(gasto);
    let botonEditarForm = gestionPresupuestosWeb.anyadirBotonEditarFormulario(gasto);
    let botonBorrar = gestionPresupuestosWeb.anyadirBotonBorrar(gasto);
    gestionPresupuestosWeb.anyadirBorrarEtiquetaHandle(divGastos, gasto); //añadomos eventHandlers a cada etiqueta del gasto
    divGastos.append(botonEditar, botonEditarForm, botonBorrar); //añadimos los botones
}
//*Mostrar el listado de gastos realizados en septiembre de 2021
//* en div#listado-gastos-filtrado-1 (funciones filtrarGastos y mostrarGastoWeb)
let gastosF1 = gestionPresupuesto.filtrarGastos({fechaDesde: "2021-09-01", fechaHasta: "2021-09-30" });
for (let g of gastosF1) {
    gestionPresupuestosWeb.mostrarGastoWeb("listado-gastos-filtrado-1", g);
}
//* Mostrar el listado de gastos de más de 50€ en div#listado-gastos-filtrado-2
//* (funciones filtrarGastos y mostrarGastoWeb)
let gastosF2 = gestionPresupuesto.filtrarGastos({valorMinimo: 50 });
for (let g of gastosF2) {
    gestionPresupuestosWeb.mostrarGastoWeb("listado-gastos-filtrado-2", g);
}
//* Mostrar el listado de gastos de más de 200€ con etiqueta seguros
//* en div#listado-gastos-filtrado-3 (funciones filtrarGastos y mostrarGastoWeb)
let gastosF3 = gestionPresupuesto.filtrarGastos({valorMinimo: 200, etiquetasTiene: ["seguros"] });
for (let g of gastosF3) {
    gestionPresupuestosWeb.mostrarGastoWeb("listado-gastos-filtrado-3", g);
}
//* Mostrar el listado de gastos que tengan las etiquetas comida o transporte de
//* menos de 50€ en div#listado-gastos-filtrado-4 (funciones filtrarGastos y mostrarGastoWeb)
let gastosF4 = gestionPresupuesto.filtrarGastos({valorMaximo: 50, etiquetasTiene: ["comida", "transporte"]});
for (let g of gastosF4) {
    gestionPresupuestosWeb.mostrarGastoWeb("listado-gastos-filtrado-4", g);
}
//* Mostrar el total de gastos agrupados por día en div#agrupacion-dia
//*  (funciones agruparGastos y mostrarGastosAgrupadosWeb)
gestionPresupuestosWeb.mostrarGastosAgrupadosWeb("agrupacion-dia", gestionPresupuesto.agruparGastos("dia"), "dia");
//* Mostrar el total de gastos agrupados por mes en div#agrupacion-mes
//*  (funciones agruparGastos y mostrarGastosAgrupadosWeb)
gestionPresupuestosWeb.mostrarGastosAgrupadosWeb("agrupacion-mes", gestionPresupuesto.agruparGastos("mes"), "mes");
//* Mostrar el total de gastos agrupados por año en div#agrupacion-anyo
//*  (funciones agruparGastos y mostrarGastosAgrupadosWeb)
gestionPresupuestosWeb.mostrarGastosAgrupadosWeb("agrupacion-anyo", gestionPresupuesto.agruparGastos("anyo"), "anyo");

//!test
let a = gestionPresupuestosWeb.guardarGastosWeb();

