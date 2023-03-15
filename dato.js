class Dato{
    constructor(descripcion,valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }
    getDescripcion() {
        return this._descripcion;   
    }
    setDescripcion(valor) {
        this._descripcion = valor;
    }
    getValor() {
        return this._valor;
    }
    setValor(valor) {
        this._valor = valor;
    }
}
datos=new Dato('mujeres',1000);
console.log(datos);