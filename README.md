# B2DFINAL

El Politécnico Colombiano JIC, necesita un sistema para gestionar los diferentes eventos, charlas, conferencias y reuniones que se realizan, para ello se necesita una aplicación que permita registrar los eventos y se quiere que sean almacenados en una BD NoSQL como (Libre). Del evento se requiere título, descripción, categorías que sirven para realizar búsquedas, fecha y lugar del evento, así como la información de los asistentes, conferencistas o facilitadores, las facultades organizadoras (de forma opcional se puede tener el programa que organizó) y los comentarios del evento.

Del lugar del evento se necesita nombre, dirección y ciudad. De los asistentes y los conferencistas se tiene identificador, nombre de usuario, nombre completo, tipo de relación con la institución (profesor, estudiante, graduado, empresario, administrativo, directivo, etc), email y ciudad. De la ciudad, se requiere su nombre, el departamento y país.

De los comentarios se requiere el texto del comentario y el usuario que lo realizó.

Se necesita que se puedan mostrar para un evento, las facultades o programas organizadores, los facilitadores y los asistentes. En caso de que sean empleados del poli, se debe cargar la información que está en el sistema relacional.

Existe una base de datos relacional, implementada en Postgresql, actualmente con la información de los profesores, el área o el programa al que está adscrito y la Facultad y Sedes. Ver modelo relacional

Se espera que la aplicación tome la información que hay disponible en Postgresql para alimentar la información del sistema de registro de eventos - EventosPoli. Se anexa el script del esquema de la BD.

# Para Ejecutar


```bash
    cd Backend

    npm install

    npm run dev
```
## También hacer
```bash
    cd FrontEnd

    npm install

    npm run dev
```


