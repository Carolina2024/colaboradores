# Base de datos colaboradores

## Requerimientos

1. Crea al menos 4 componentes: `Listado`, `Formulario`, `Buscador` y `Alert`, todos estos serán importados desde `App.jsx`.

2. Cargar la lista de colaboradores desde un archivo `.js` e importarlos en el archivo `App.jsx`.

3. En el componente `Listado` se deben mostrar los datos de los colaboradores utilizando una tabla de Bootstrap.

4. El componente `Formulario` debe contener el formulario con los campos necesarios para agregar colaboradores a la lista y un botón para agregar los campos, además se debe validar que los campos no se encuentren vacíos.

5. Luego de presionar el botón de Agregar colaborador, el componente `Alert` debe mostrar un mensaje indicando si es que el colaborador fue agregado exitosamente o si los campos se encuentran vacíos.  
   a. Utiliza los props para mostrar un mensaje de error o de éxito.  
   b. Opcionalmente, puedes utilizar otro prop para cambiar el color de la alerta (`success` o `danger`) según corresponda.  
   c. Como recordatorio, debes tener un `state` en el componente `App` que almacene el mensaje de error o de éxito, y pasar mediante props al componente `Alert` y `Formulario`.

6. Crear un componente para realizar una búsqueda de colaboradores por todos los campos del formulario.

7. Replicar el estilo de la aplicación usando Bootstrap, ya sea mediante `react-bootstrap` o su CDN.  
   a. Este debe ser responsive, como lo muestran las imágenes de referencia al final del desafío.

8. Crear un repositorio en GitHub para alojar el proyecto y trabajar de manera colaborativa.  
   a. Cada integrante del equipo deberá realizar al menos dos commits con distintas funcionalidades.
