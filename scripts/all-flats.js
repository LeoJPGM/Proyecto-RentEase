const mostrarFlats = document.querySelector('.allflats-list');

const ciudad = document.querySelector('#ciudad');
const precioMin = document.querySelector('#precioMin');
const precioMax = document.querySelector('#precioMaximo');
const areaMin = document.querySelector('#areaMin');
const areaMax = document.querySelector('#areaMax');

const flats = JSON.parse(localStorage.getItem('Flats')); 

const datosBusqueda = {
    ciudad : '',
    preciomin : '',
    preciomax : '',
    areamin: '',
    areamax: ''
}

document.addEventListener('DOMContentLoaded', () =>{
    mostrarAllFlats(flats);
});

ciudad.addEventListener('change', e =>{
    datosBusqueda.ciudad = e.target.value;

    if(datosBusqueda.ciudad === 'Seleccione'){
        mostrarAllFlats(flats)
        return;
    }

    filtrarAllFlats();
});

precioMin.addEventListener('change', e =>{
    datosBusqueda.preciomin = e.target.value;

    if(datosBusqueda.preciomin === 'Seleccione'){
        mostrarAllFlats(flats);
        return;
    }
    
    filtrarAllFlats();
});

precioMax.addEventListener('change', e =>{
    datosBusqueda.preciomax = e.target.value;

    if(datosBusqueda.preciomax === 'Seleccione'){
        mostrarAllFlats(flats);
        return;
    }

    filtrarAllFlats();
});

areaMin.addEventListener('change', e =>{
    datosBusqueda.areamin = e.target.value;

    if(datosBusqueda.areamin === 'Seleccione'){
        mostrarAllFlats(flats);
        return;
    }
    
    filtrarAllFlats();
});

areaMax.addEventListener('change', e =>{
    datosBusqueda.areamax = e.target.value;

    if(datosBusqueda.areamax === 'Seleccione'){
        mostrarAllFlats(flats);
        return;
    }

    filtrarAllFlats();
});

function mostrarAllFlats(flats){

    limpiarHTML();

    flats.forEach(flat =>{
        let nuevoAC;
        const {ciudad, precio, fecha, nombreCalle, numeroCalle, area, ac, flatID} = flat;
        const flatsHTML = document.createElement('p');

        if(ac){
            nuevoAC = 'Si';
        }else{
            nuevoAC = 'No';
        }

        flatsHTML.innerHTML = `
            <div class="flat-img">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="IMG">
            </div>
            <div class="flat-info">
                <h3>${ciudad}</h3>
                <p>${nombreCalle}, ${numeroCalle}</p>
                <p>Tamaño del area: ${area}m</p> 
                <p>Aire acondicionado: ${nuevoAC}</p>
                <p>Fecha de disponibilidad: ${fecha}</p>
                <div class="flat-precio-fav">
                    <button class="button-fav" id="${flatID}"><i class='bx bx-heart'></i></button>
                    <span>Desde $${precio}</span>
                </div>
            </div>
        `;
        mostrarFlats.appendChild(flatsHTML);
    });
}

function filtrarAllFlats(){
    const resultado = flats.filter(filtrarCiudad).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarAreaMin).filter(filtrarAreaMax);

    if(resultado.length){
        mostrarAllFlats(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.textContent = 'No hay resultados';
    mostrarFlats.appendChild(noResultado);
}

function filtrarCiudad(flat){
    if(datosBusqueda.ciudad){
        return flat.ciudad === datosBusqueda.ciudad;
    }
}

function filtrarPrecioMin(flat){
    if(datosBusqueda.preciomin){
        return flat.precio >= datosBusqueda.preciomin;
    }
}

function filtrarPrecioMax(flat){
    if(datosBusqueda.preciomax){
        return flat.precio <= datosBusqueda.preciomax;
    }
}

function filtrarAreaMin(flat){
    if(datosBusqueda.areamin){
        return flat.area >= datosBusqueda.areamin;
    }
}

function filtrarAreaMax(flat){
    if(datosBusqueda.areamax){
        return flat.area <= datosBusqueda.areamax;
    }
}

function limpiarHTML(){
    while(mostrarFlats.firstChild){
        mostrarFlats.removeChild(mostrarFlats.firstChild);
    }
}




