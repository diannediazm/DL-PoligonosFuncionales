"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = function () {
      return nombre;
    };

    this._impuesto = function () {
      return impuesto;
    };
  }

  _createClass(Cliente, [{
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this.impuesto().monto_bruto_anual() - this.impuesto().deducciones()) * 21 / 100;
    }
  }, {
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuve_nombre) {
      return this._nombre = function () {
        return nuve_nombre;
      };
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    }
  }]);

  return Cliente;
}();
/*ES5
function Cliente (nombre, impuesto) {
        this._nombre = function () {
            return nombre;
        };
        this._impuesto = function (){
            return impuesto;
        };
    }

Cliente.prototype.getNombre = function (){
    return this._nombre();
};

Cliente.prototype.getImpuesto = function (){
    return this._impuesto();
};

Cliente.prototype.setNombre = function (nuve_nombre){
    this._nombre = function (){
        return nuve_nombre;
    };
};

Cliente.prototype.setImpuesto = function (nuve_impuesto){
    this._impuesto = function (){
        return nuve_impuesto;
    }
};

function calcularImpuesto (){

}*/


exports.Cliente = Cliente;