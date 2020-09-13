export class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = () => nombre;
        this._impuesto = () => impuesto;
    }
    get nombre() {
        return this._nombre;
    }
    get impuesto() {
        return this._impuesto;
    }
    set nombre(nuve_nombre) {
        return (this._nombre = () => nuve_nombre);
    }
    calcularImpuesto(){
        return ((this.impuesto().monto_bruto_anual() - this.impuesto().deducciones())*21)/100;
    }
}


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