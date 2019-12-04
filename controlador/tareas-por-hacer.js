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
    let data = JSON.stringify(tareasPorHacer); // convierte un objeto a un json 

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
        // evitar la acumulacion de valores
    });
}

const crear = (descripcion) => {
    // se cargan en la variable tareasPorHacer los datos del archivo data.json
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
    cargarDB();
    
    let lista_nueva = []
    if (completado === undefined) {
        return tareasPorHacer
    } 


    if (completado != undefined) {

    if (completado === 'true'){
        estado_t=true
    }else{
        estado_t=false
    }
      
       for (let es of tareasPorHacer) {
            if (es.completado === estado_t) {
                lista_nueva.push(es)
            }
           
            
        }
    }
    return lista_nueva;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;

}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}