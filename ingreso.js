class Ingreso extends Dato{
    static contador=0
    constructor(descripcion,valor){
        super(descripcion,valor);
        this._Id=++Ingreso.contador;
    }
    getId(){
        return this._Id;
    }
}

ingreso1=new Ingreso('servicio compania',5000);
console.log(ingreso1._Id);