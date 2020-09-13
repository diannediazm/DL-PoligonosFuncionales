export class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = () => monto_bruto_anual;
        this._deducciones = () => deducciones;
    }
    get monto_bruto_anual() {
        return this._monto_bruto_anual;
    }
    get deducciones() {
        return this._deducciones;
    }
    set monto_bruto_anual(nuve_montoBrutoAnual){
        return (this._monto_bruto_anual = () => nuve_montoBrutoAnual);
    }
    set deducciones(nuve_deducciones) {
        return (this._deducciones = () => nuve_deducciones);
    }
}













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