const fs = require('fs');

let tareasPorHacer = [];

const cargarDB = () => {
    try {
        //cargar el archivo json
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        // si el json no tiene ningun valor
        tareasPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer); 
    // convierte un objeto a un json 

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
        // evitar la acumulacion de valores
    });
}

const crear = (descripcion) => {
    // se cargan en la variable tareasPorHacer los datos del 
    //archivo data.json
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    //se agrega una nueva tarea
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}





const getLista = (completado) => {
    // carga los datos del archivo data.json
    cargarDB();
     // cualquier valor que no sea true o false regresara toda la lista
    let lista_nueva = []

    if ( completado != 'true' && completado != 'false') {
       
        return tareasPorHacer
    } 

    

    //cambiar de estado segun se ingrese en consola
    if (completado === 'true'){
        estado_t=true
    }else{
        estado_t=false
    }
      
    // agregar los valores sean falsos o verdaderos en una nueva lista 
       for (let es of tareasPorHacer) {
            if (es.completado === estado_t) {
                lista_nueva.push(es)
            }
           
            
        }
    
    // retornar la lista con tareas completas o incompletas dependiendo 
    //la peticion en consola
    return lista_nueva;
}






const actualizar = (descripcion, completado = true) => {
    cargarDB();
    //actualizar el objeto tarea de descripcion del array 
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //guardar la actualizacion en el data.json
    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        // retornar verdadero si se pudo actualizar
        return true;
    }
    // retornar falso si no se pudo actualizar
    return false;

}

const borrar = (descripcion) => {
    cargarDB();
    // se crea un nuevo array el cual no contenga la tarea 
    //recibida por consola
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        
        // si no se borro ningun archivo retornar falso es decir si tienen 
        // la misma longitud el array nuevo con el antiguo
        return false;
    } else {
        // caso contrario pasar el array nuevo sin la tarea 
        // escrita en pantalla
        
        tareasPorHacer = nuevoListado;
        guardarDB();
        // retornar verdadero si se pudo borrar la tarea
        return true;
    }
}
//exportar las funciones para usarlas en otros js
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}