import {Cliente} from "./clientes.js";
import {Impuestos} from "./impuestos.js";

let Cliente1 = new Cliente("Dianne", impuesto1);
let Impuesto1 = new Impuestos(2000, 8000);
console.log(Cliente1);
console.log(Impuesto1);
console.log(Cliente1.calcularImpuesto());