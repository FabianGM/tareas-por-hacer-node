const descripcion = {
    demand: true,//parametro  para incluir que tarea va a relizar
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,//parametro para incluir en que estado esta la tarea que va a relizar
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};

const argv = require('yargs')
    .command('listar', 'Listar todas las tareas por hacer', { 
    completado 
    })
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    //comandos que se pueden utilizar en la consola
    .help()
    .argv;

module.exports = {
    argv
    //variable que va a reconocer lo escrito en consola
}