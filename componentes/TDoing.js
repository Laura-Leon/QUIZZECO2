class TDoing{

    constructor(tarea){
        this.tarea = tarea;

    }
render = ()=>{
    let component = document.createElement('div');
    component.className = 'fi2';

    let misionCont = document.createElement('div');
    misionCont.className = "misionCont";
    misionCont.innerHTML = (
            '<p>'+this.tarea.mision+'</p>');
    
            let fecha = document.createElement('div');
            fecha.className = "fecha";
            fecha.innerHTML = (
                    this.tarea.fechaa);     
    
    
     let deletebtn = document.createElement('button');
    deletebtn.className = 'deletebtn';
    deletebtn.innerHTML = '';
    
    let azulsigbtn = document.createElement('button');
    azulsigbtn.className = 'azulsigbtn';
    azulsigbtn.innerHTML = '';

let amarilloatrasbtn = document.createElement('button');
amarilloatrasbtn.className = 'amarilloatrasbtn';
amarilloatrasbtn.innerHTML = '';


 component.appendChild(misionCont);
 component.appendChild(deletebtn); 
 component.appendChild(fecha); 
 component.appendChild(amarilloatrasbtn); 

//eliminar comentario
deletebtn.addEventListener('click',()=>{

    const database = firebase.database();
   
   database.ref('tareas Doing/'+this.tarea.id).set(null);

});

//pasar elemento a doing
azulsigbtn.addEventListener('click',()=>{
  
    const database = firebase.database();
       
    database.ref('tareas Done/'+this.tarea.id).set(this.tarea);
    database.ref('tareas Doing/'+this.tarea.id).set(null);

});


//pasar elemento a done
amarilloatrasbtn.addEventListener('click',()=>{

    const database = firebase.database();
       
    database.ref('tareas/'+this.tarea.id).set(this.tarea);
    database.ref('tareas Doing/'+this.tarea.id).set(null);
});
return component;

}
}