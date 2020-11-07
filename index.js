const database = firebase.database();
const inputarea = document.getElementById('inputarea');
const nuevatareabtn = document.getElementById('nuevatareabtn');
const DivToDO = document.getElementById('DivToDO');
const divDoing = document.getElementById('divDoing');
const divDone = document.getElementById('divDone');



const agregarTarea = ()=>{
if(inputarea.value === ' '){
    alert(' ponga el texto');
    return;
}

let referencia = database.ref('tareas').push();
let fechaa = new Date();
    let tarea ={
        id:referencia.key,
mision: inputarea.value,
fechaa: fechaa.getDate()+"/"+ fechaa.getMonth() +"/"+ fechaa.getFullYear(), 
    };
    referencia.set(tarea);

inputarea.value =' ';

}
nuevatareabtn.addEventListener('click',agregarTarea);

database.ref('tareas').on('value',function(data) {
    DivToDO.innerHTML = ' ';

        data.forEach(tarea =>{
            let valor = tarea.val();
            console.log(valor.mision);
            let fi = new Tarea(valor);
            DivToDO.appendChild(fi.render());


        });

    });
    

database.ref('tareas Doing/').on('value',function(data) {
    divDoing.innerHTML = ' ';
    
            data.forEach(tarea =>{
                let valor = tarea.val();
                console.log(valor.mision);
                let fi2 = new TDoing(valor);
                divDoing.appendChild(fi2.render());
    
    
            });
    
        });
    
        
database.ref('tareas Done').on('value',function(data) {
    divDone.innerHTML = ' ';
        
                data.forEach(tarea =>{
                    let valor = tarea.val();
                    console.log(valor.mision);
                    let fi3 = new TDone(valor);
                    divDone.appendChild(fi3.render());
        
        
                });
        
            });
                    
