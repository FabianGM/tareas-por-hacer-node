## TAREAS POR HACER (AGENDA EN CONSOLA)

Está aplicación puede agregar nuevas tareas, actualizar su estado, borrar tareas 
y finalmente listar las tareas que desee sea tareas completas o incompletas.

Para que funcione está aplicación utlizamos persistencia a una base de datos
en este caso se utliza un archivo JSON.


Instalar los paquetes con:

```
npm install
```


Instrucción para agregar una nueva tarea
```
node app crear -d "Ingresar nueva tarea" 
```
![Alt text](./pictures/crear.png "imagen crear")



Instrucción para listar todas las tareas que tenemos en nuestra base de datos

```
node app listar
```

![Alt text](./pictures/listar.png "imagen listar")



Instrucción para listar tareas completadas

```
node app listar -c true
```
![Alt text](./pictures/listar-completadas.png "imagen listar completadas")



Instrucción para listar tareas incompletas

```
node app listar -c false
```
![Alt text](./pictures/listar-incompletas.png "imagen listar incompletas")



Instrucción para actualizar el estado de una tarea

```
node app actualizar -d "Ingresar la tarea a actualizar" 
```
![Alt text](./pictures/actualizar1.png "imagen actualizar")


![Alt text](./pictures/mostrar-actualizacion.png "imagen mostrar actualizar")




Instrucción para borrar una tarea

```
node app borrar -d "Ingresar la tarea que deseas borrar" 
```
![Alt text](./pictures/borrar.png "imagen borrar")


![Alt text](./pictures/mostrar-borrado.png "imagen mostrar actualizar")









