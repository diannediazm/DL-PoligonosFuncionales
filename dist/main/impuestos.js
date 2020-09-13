"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuestos = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._monto_bruto_anual = function () {
      return monto_bruto_anual;
    };

    this._deducciones = function () {
      return deducciones;
    };
  }

  _createClass(Impuestos, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    },
    set: function set(nuve_montoBrutoAnual) {
      return this._monto_bruto_anual = function () {
        return nuve_montoBrutoAnual;
      };
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nuve_deducciones) {
      return this._deducciones = function () {
        return nuve_deducciones;
      };
    }
  }]);

  return Impuestos;
}();
/*ES5

function Impuestos (montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = function (){
            return montoBrutoAnual;
        };
        this._deducciones = function (){
            return deducciones;
        };
    }

Impuestos.prototype.getMontoBrutoAnual = function (){
    return this._montoBrutoAnual();
};

Impuestos.prototype.getDeducciones = function (){
    return this._deducciones();
};

Impuestos.prototype.setMontoBrutoAnual = function (nuve_montoBrutoAnual){
    this._montoBrutoAnual = function (){
        return nuve_montoBrutoAnual;
    };
};

Impuestos.prototype.setDeducciones = function (nuve_deducciones){
    this._deducciones = function (){
        return nuve_deducciones;
    }
}; */


exports.Impuestos = Impuestos;