let mostrarFlat = document.querySelector('.galeria-port');

agregarFlats();

function agregarFlats(){
    let favFlats = JSON.parse(localStorage.getItem('FavFlats'));
    let {id} = usuario;
    let flatsFiltrados = favFlats.filter(flat => flat.usuarioID === id);

    flatsFiltrados.forEach(flats => {
        const {ciudad, precio, fecha} = flats;
        const flatsHTML = document.createElement('div');
        flatsHTML.classList.add('imagen-port');

        flatsHTML.innerHTML = `
            <img src="./img/RENTA1.jpeg" alt="">
            <div class="hover-galeria">
                <img src="./img/icono1.png" alt="">
                <p>
                    Ciudad: $${ciudad} 
                    Precio: $${precio}
                    Fecha: $${fecha}
                </p>
            </div>
        `;

        mostrarFlat.appendChild(flatsHTML);
    });
}

