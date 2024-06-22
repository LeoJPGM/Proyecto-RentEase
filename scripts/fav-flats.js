let mostrarFlat = document.querySelector('.favflats-list');
let noflat = document.querySelector('.no-flat');
const favFlats = JSON.parse(localStorage.getItem('FavFlats'));

const {id} = usuario;

agregarFlats();
borrarFlat();

function agregarFlats(){

    if(favFlats === null){
        return;
    }else{
        let flatsFiltrados = favFlats.filter(flat => flat.usuarioID === id);

        flatsFiltrados.forEach(flats => {
            let nuevoAC;
            const {ciudad, precio, fecha, nombreCalle, numeroCalle, area, ac, flatID} = flats;
            const flatsHTML = document.createElement('div');
            flatsHTML.classList.add('flat');

            if(ac){
                nuevoAC = 'Si';
            }else{
                nuevoAC = 'No'
            }

            flatsHTML.innerHTML = `
                <div class="flat-img">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="IMG">
                </div>
                <div class="flat-info">
                    <h3>${ciudad}</h3>
                    <p>${nombreCalle}, ${numeroCalle}</p>
                    <p>Tamaño del area: ${area}</p> 
                    <p>Aire acondicionado: ${nuevoAC}</p>
                    <p>Fecha de disponibilidad: ${fecha}</p>
                    <div class="flat-precio-fav">
                        <button class="button-fav" id="${flatID}"><i class='bx bx-heart'></i></button>
                        <span>Desde $${precio}</span>
                    </div>
                </div>
            `;
            mostrarFlat.appendChild(flatsHTML);
    });
    }
}

function borrarFlat(){
    let btn = document.querySelectorAll('.button-fav');
    btn.forEach(boton =>{
        boton.addEventListener('click', () =>{
            let obtenerID = boton.id;
            let btnID = parseInt(obtenerID);
            let indiceDepa = favFlats.findIndex(i => i.flatID === btnID);
            let departamentoUpdate;
            
            if(indiceDepa !== -1){
                favFlats.splice(indiceDepa, 1);
            }
            departamentoUpdate = JSON.stringify(favFlats);
            localStorage.setItem('FavFlats', departamentoUpdate);
            location.reload();
        });
    });
}