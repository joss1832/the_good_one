
const btn_pedir = document.querySelector('#pedir');
let alumno_info = [];
btn_pedir.addEventListener('click', function(event){
    event.preventDefault()
    let nombre = prompt('cual es tu nombre?');
    let grupo = prompt('cual es tu grupo?');
    let matricula = prompt('cual es tu matricula?');
    
    alumno_info.push({
        nombre: nombre,
        grupo: grupo,
        matricula:matricula
    })

    
});

const btn_mostrar = document.querySelector('#alumnos');
btn_mostrar.addEventListener('click', function(e){
    e.preventDefault();

    const contenedor = document.querySelector('#contenedor_info');
    contenedor.innerText = '';

    for (let i = 0; i < alumno_info.length; i++) {
        let alumno = alumno_info[i];
        let info = document.createElement('div');
        info.innerText =
        `nombre: ${alumno.nombre}
         grupo: ${alumno.grupo}
         matricula: ${alumno.matricula}
        `

        contenedor.appendChild(info)
        document.getElementById("contenedor_info").style.display = "flex";

    }
})