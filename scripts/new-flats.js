let btn = document.querySelector('.agregar');

btn.addEventListener('click', e =>{
    e.preventDefault();
    crearFlat();
});

function crearFlat(){
    let cuidad = document.querySelector('.ciudad').value;
    let nombreCalle = document.querySelector('.name-calle').value;
    let numeroCalle = document.querySelector('.n-calle').value;
    let sizeArea = document.querySelector('.size-area').value;
    let aireC = document.querySelector('.ac').checked;
    let yearBuild = document.querySelector('.year-build').value;
    let precioRenta = document.querySelector('.precio').value;
    let fecha = document.querySelector('.fecha').value;

    let listaFlats = JSON.parse(localStorage.getItem('Flats'));

    let {id} = usuario;
    let flats = [];
    let favFlats = [];

    if(listaFlats){
        flats = JSON.stringify([...listaFlats, {'ciudad': cuidad, 'nombre-calle': nombreCalle, 'numero-calle': numeroCalle, 'size-area': sizeArea, 'aire-acondicionado': aireC, 'year-build': yearBuild, 'precio': precioRenta, 'fecha': fecha, 'usuarioID': id}]);
        favFlats = flats;
    }else{
        flats = JSON.stringify([{'ciudad': cuidad, 'nombre-calle': nombreCalle, 'numero-calle': numeroCalle, 'size-area': sizeArea, 'aire-acondicionado': aireC, 'year-build': yearBuild, 'precio': precioRenta, 'fecha': fecha, 'usuarioID': id}]);
        favFlats = flats;
    }
    localStorage.setItem('Flats', flats);
    localStorage.setItem('FavFlats', favFlats);
}