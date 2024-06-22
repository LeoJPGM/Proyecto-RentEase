let btn = document.querySelector('.agregar');

btn.addEventListener('click', e =>{
    e.preventDefault();
    crearFlat();
});

function crearFlat(){
    let cuidad = document.querySelector('.ciudad').value;
    let nombreCalle = document.querySelector('.nombre-calle').value;
    let numeroCalle = document.querySelector('.numero-calle').value;
    let sizeArea = document.querySelector('.area').value;
    let aireC = document.querySelector('.ac').checked;
    let yearBuild = document.querySelector('.year-build').value;
    let precioRenta = document.querySelector('.precio-renta').value;
    let fecha = document.querySelector('.fecha-disponible').value;

    let listaFlats = JSON.parse(localStorage.getItem('Flats'));

    let {id} = usuario;
    let flats = [];
    let favFlats = [];

    if(listaFlats){
        flats = JSON.stringify([...listaFlats, {'ciudad': cuidad, 'nombreCalle': nombreCalle, 'numeroCalle': numeroCalle, 'area': sizeArea, 'ac': aireC, 'yearBuild': yearBuild, 'precio': precioRenta, 'fecha': fecha, 'usuarioID': id, 'flatID': generarIdIncremental()}]);
        favFlats = flats;
    }else{
        flats = JSON.stringify([{'ciudad': cuidad, 'nombreCalle': nombreCalle, 'numeroCalle': numeroCalle, 'area': sizeArea, 'ac': aireC, 'yearBuild': yearBuild, 'precio': precioRenta, 'fecha': fecha, 'usuarioID': id, 'flatID': generarIdIncremental()}]);
        favFlats = flats;
    }
    localStorage.setItem('Flats', flats);
    localStorage.setItem('FavFlats', favFlats);
    location.reload();
}

function obtenerUltimoId(){
    return parseInt(localStorage.getItem('flatID') || '0', 10);
}

function guardarUltimoId(id){
    localStorage.setItem('flatID', id.toString());
}

function generarIdIncremental(){
    const ultimoId = obtenerUltimoId();
    const nuevoId = ultimoId + 1;
    guardarUltimoId(nuevoId);
    return nuevoId;
}