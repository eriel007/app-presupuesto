const ingresos=[];
const egresos=[];

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
     document.getElementById('presupuesto').innerHTML=`Bs. ${presupuesto}`;
     document.getElementById('porcentaje').innerHTML=`${porcentaje.toFixed(2)}%`;
     document.getElementById('ingresos').innerHTML=`bs. ${totalIngresos()}`;
     document.getElementById('egresos').innerHTML=`bs. ${totalEgresos()}`;
}
function formatoMoneda(valor){
    return  valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFraction:2});
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
            <div class="elemento_valor">+bs ${ingreso._valor} </div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn" 
                onclick="eliminarIngreso(${ingreso._id})">
                    <ion-icon name='close-circle-outline'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}
function eliminarIngreso(id) {
    let indice=ingresos.findIndex(ingreso => ingreso._id == id);
    ingresos.splice(indice, 1);
    cargarCabecero();
    cargarIngresos();
}
function cargarEgresos() {
    let egresosHTML='';
    for(let egreso of egresos){
        egresosHTML+=crearEgresosHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}
function crearEgresosHTML(egreso) {
    let porcentaje=porcentajeEgreso(egreso._valor);
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">-bs ${egreso._valor}</div>
            <div class="elemento_porcentaje">${porcentaje}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn"
                   onclick="eliminarEgreso(${egreso._id})">
                    <ion-icon name='close-circle-outline'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}
function eliminarEgreso(id) {
    let indice=egresos.findIndex(egreso => egreso._id == id);
    egresos.splice(indice, 1);
    cargarCabecero();
    cargarEgresos();
}
function porcentajeEgreso(valor){ 
    let res=(valor*100)/totalIngresos();
    return res.toFixed(2)+"%";
}
function agregarDatos(){
     let forma=document.forms['forma'];
     let tipo=forma['tipo'];
     let descripcion=forma['descripcion'];
     let valor=forma['valor'];
     if (descripcion.value !== ''&&valor.value !== '') {
        if (tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        }else{
            egresos.push(new Egreso(descripcion.value, +valor.value));
             cargarCabecero();
             cargarEgresos();
        }
     }
}