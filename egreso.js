class Egreso extends Dato{
    static contador=0;
    constructor(descripcion,valor){
        super(descripcion,valor);
        this.id=++Egreso.contador;
    }
    getId(){
        return this.id;
    }
}