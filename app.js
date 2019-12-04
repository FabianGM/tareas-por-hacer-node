const argv = require('./config/yargs').argv;
// instanciar los atributos del archivo yargs
const tareas = require('./controlador/tareas-por-hacer');
// se cargan las funciones del archivo tareas-por-hacer.js
const colors = require('colors');

let comando = argv._[0];
// en la posicion 0 se encuentra el comando escrito por consola

switch (comando) {
    // verifica cual comando es ingresado en consola 
    case 'crear':
        // crea una tarea y guarda en el archivo data.json
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        // muestra las tareas formateadas con un respectivo color
        let listado = tareas.getLista(argv.completado);
        for (let tarea of listado) {
            console.log("======= POR HACER =====".bgRed);
            
            console.log(tarea.descripcion.green);
            console.log(`Estado:  ${tarea.completado}`.blue);
        }
        break;
    case 'actualizar':
        // actualizar una tarea false (incompleta) a estado  true (completa)
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        // borra la tarea escrita en consola
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}