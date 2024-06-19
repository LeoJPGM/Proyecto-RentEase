const mostrarFlats = document.querySelector('.flats');

const ciudad = document.querySelector('#ciudad');
const min = document.querySelector('#minimo');
const max = document.querySelector('#maximo');

const flats = JSON.parse(localStorage.getItem('Flats')); 

const datosBusqueda = {
    ciudad : '',
    minimo : '',
    maximo : ''
}

document.addEventListener('DOMContentLoaded', () => {
    allFlats(flats);
});

ciudad.addEventListener('change', e => {
    datosBusqueda.ciudad = e.target.value;

    if(datosBusqueda.ciudad === 'Seleccione'){
        allFlats(flats);
        return;
    }

    filtrarFlats();
});

min.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
});

max.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
});

function allFlats(flats){

    limpiarHTML();

    flats.forEach(flat =>{
        const {ciudad, precio, fecha} = flat;
        const flatHTML = document.createElement('p');

        flatHTML.textContent = `
            Ciudad: ${ciudad} - Precio: ${precio} - Fecha: ${fecha}
        `;

        mostrarFlats.appendChild(flatHTML);
    });
}

function filtrarFlats(){
    const resultado = flats.filter(filtrarCiudad);

    if(resultado.length){
        allFlats(resultado);
    }else{
        console.log('error');
    }
}

function filtrarCiudad(flat){
    if(datosBusqueda.ciudad){
        return flat.ciudad === datosBusqueda.ciudad;
    }
    console.log('No se encontro');
}

function limpiarHTML(){
    while(mostrarFlats.firstChild){
        mostrarFlats.removeChild(mostrarFlats.firstChild);
    }
}