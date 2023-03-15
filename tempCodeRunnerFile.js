const ingresos=[new Ingreso('salario',9000),
                 new Ingreso('alquiler casa',8000),
                new Ingreso('venta de auto',78000),
            new Ingreso('venta de celular',3000)];

const egresos=[new Egreso('renta departamento',4000),
               new Egreso('ropa',1000)];

function cargarApp(){
     cargarCabecero();
     cargarIngresos();
     cargarEgresos();
}

function totalIngresos(){
    let totalIngresos=0;
    for(let ingreso of ingresos){
        totalIngresos+=ingreso._valor;
    }
    return totalIngresos;
}

function totalEgresos(){
    let totalEgresos=0;
    for(let egreso of egresos){
        totalEgresos+=egreso._valor;
    }
    return totalEgresos;
}
function cargarCabecero(){
     let presupuesto=totalIngresos()-totalEgresos();
     let porcentaje=(totalEgresos()*100)/totalIngresos();
     document.getElementById('presupuesto').innerHTML="Bs "+presupuesto;
     document.getElementById('porcentaje').innerHTML=porcentaje.toFixed(2)+"%";
     document.getElementById('ingresos').innerHTML=totalIngresos()+" Bs";
     document.getElementById('egresos').innerHTML=totalEgresos()+" Bs";
}
function cargarIngresos(){
    let ingresosHTML='';
    for(let ingreso of ingresos){
        ingresosHTML+=crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML=ingresosHTML;
}
function crearIngresoHTML(ingreso) {
    let ingresoHTML=`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${ingreso._valor} </div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name='close-circle-outline'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}
function cargarEgresos() {
    let egresosHTML='';
    for(let egreso of egresos){
        egresosHTML+=crearEgresosHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}
function crearEgresosHTML(egreso) {
    let porcentaje=porcentaje(egreso._valor);
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${egreso._valor}</div>
            <div class="elemento_porcentaje">${porcentaje}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name='close-circle-outline'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}
function porcentaje(valor){ 
    let res=(valor*100)/totalIngresos();
    return res.toFixed(2)+"%";
}