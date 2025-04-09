const boton_pedir= document.querySelector('#pedir'); //referencia del boton
const boton_mostrar = document.querySelector('#mostrar')
let lista_alumnos = [] //creamos una lista vacia que guaradara los objetos 


//funcion para pedir datos del alumno
function registrarAlumno() {
    let nombre = prompt('¿Cuál es tu nombre?');
    let grupo = prompt('¿Cuál es tu grupo?');
    let matricula = prompt('¿Cuál es tu matrícula?');

    if (nombre !== "" && grupo !== "" && matricula !== "" && nombre !== null && grupo !== null && matricula !== null) {
        let info = {
            nombre: nombre,
            grupo: grupo,
            matricula: matricula
        };
        lista_alumnos.push(info);
        alert('Alumno registrado con éxito.');
        console.log(lista_alumnos); // para verificar en consola
    } else {
        alert('Por favor rellena todos los campos.');
    }
}
//aqui termina la funcion para pedir alumnos 

// Evento por clic
boton_pedir.addEventListener('click', function(e) {
    e.preventDefault();
    registrarAlumno();
});
//aqui termina el evento al dar click al boton pedir

//aqui comienza el evento con la combinacion de teclas 
window.addEventListener('keydown', event => { //escucha cuando cualquier tecla es presionada en la página.
    let letra_presionada = event.key; //guarda la tecla presionada

    if (letra_presionada.toLowerCase() === 'r' && event.ctrlKey) { //verifica que se este presionando la letra r y la tecla ctrl
        event.preventDefault();
        registrarAlumno();
    }
});
//aqui termina el evento de la combinacion de teclas para pedir datos

//funcion para mostrar los alumnos 
function mostrar_alumnos() {
    const contenedor_info = document.getElementById('contenedor_info');
    
    // Toggle para mostrar/ocultar
    if (contenedor_info.style.display === 'block') {
        contenedor_info.style.display = 'none';
        return;
    }

    // Limpiar y preparar contenedor
    contenedor_info.innerHTML = '<h3>Alumnos Registrados:</h3>';
    
    // Agregar cada alumno en un párrafo separado
    for (let i = 0; i < lista_alumnos.length; i++) {
        const alumno = lista_alumnos[i];
        const parrafo = document.createElement('p');
        parrafo.textContent = `Nombre: ${alumno.nombre} | Grupo: ${alumno.grupo} | Matrícula: ${alumno.matricula}`;
        parrafo.classList.add('alumno-item'); // Clase para estilos
        contenedor_info.appendChild(parrafo);
    }
    
    contenedor_info.style.display = 'block';
}
// aqui termina la funcion para mostrar alumnos 

//evento para mostrar alumnos al dar click al boton
boton_mostrar.addEventListener('click', function(e) {
    e.preventDefault();
    mostrar_alumnos();
});
// aqui termina el evento de mostrar alumnos al dar click al boton

//aqui comienza el evento con la combinacion de teclas 
window.addEventListener('keydown', event => { //escucha cuando cualquier tecla es presionada en la página.
    let letra_presionada = event.key; //guarda la tecla presionada

    if (letra_presionada.toLowerCase() === 'm' && event.ctrlKey) { //verifica que se este presionando la letra r y la tecla ctrl
        event.preventDefault();
        mostrar_alumnos();
    }
});


