
const btn_pedir = document.querySelector('#mostrar');
let alumno_info = [];
btn_pedir.addEventListener('click', function(event){
    let nombre = prompt('cual es tu nombre?');
    let grupo = prompt('cual es tu grupo?');
    let matricula = prompt('cual es tu matricula?');
    
    alumno_info.push({
        nombre: nombre,
        grupo: grupo,
        matricula:matricula
    })

    let info = document.createElement('div')
    info.innerHTML = `
    <p>nombre: ${nombre}</p>
    <p>grupo : ${grupo}</p>
    <p>matricula : ${matricula}</p>`
    
    document.getElementById('#contenedor_info').appendChild(info)
});