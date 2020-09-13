"use strict";

var _clientes = require("./clientes.js");

var _impuestos = require("./impuestos.js");

var Cliente1 = new _clientes.Cliente("Dianne", impuesto1);
var Impuesto1 = new _impuestos.Impuestos(2000, 8000);
console.log(Cliente1);
console.log(Impuesto1);
console.log(Cliente1.calcularImpuesto());