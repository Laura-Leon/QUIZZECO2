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
    let tarea ={
        id:referencia.key,
mision: inputarea.value,
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
    
