const btn = document.querySelector('.guardar');
const usuarios = JSON.parse(localStorage.getItem('Usuarios'));
const favFlats = JSON.parse(localStorage.getItem('FavFlats'));


btn.addEventListener('click', () => {
    actualizarDatos();
});

function actualizarDatos(){
    let nombre = document.querySelector('.nombre').value;
    let apellido = document.querySelector('.apellido').value;
    let email = document.querySelector('.email').value;
    let exEmail = /\S+@\S+\.\S+/;
    let password = document.querySelector('.password').value;
    let confpassword = document.querySelector('.confpassword').value;
    let fecha = document.querySelector('.fecha').value;

    let {id} = usuario;

    let updateUsuario;
    let updateToken;

    if(validaciones(nombre, apellido, email, exEmail, fecha, password, confpassword)){
        let indice = usuarios.findIndex(i => i.email === usuario.email);
        let nuevoUsuario = {'nombre': nombre, 'apellido': apellido, 'email': email, 'password': password, 'fecha': fecha, 'id': id};
        let verfUsuario = usuarios.some(datos => datos.email === nuevoUsuario.email);

        if(verfUsuario){
            console.log('Correo ya registrado');
            return;
        }
        
        if(indice !==  -1){
            usuarios[indice] = nuevoUsuario;
            updateUsuario = JSON.stringify(usuarios);
            updateToken = JSON.stringify(nuevoUsuario);
        }
    }else{
        console.log('Error');
        return;
    }
    localStorage.setItem('Usuarios', updateUsuario);
    localStorage.setItem('Usuario', updateToken);
    location.reload();
}

function validaciones(nombre, apellido, email, exEmail, fecha, password, confPassword){
    if(nombre.length >= 3 && nombre !== '' && apellido.length >= 5 && apellido !== ''){
        
    }else{
        console.log('Llene bien los campos: Nombre y Apellido');
        return;
    }

    if(exEmail.test(email) && email !== ''){

    }else{
        console.log('Llene bien los campos: email');
        return;
    }

    if(fecha !== ''){
        const year = parseInt(fecha);
        if(year <= 2006){

        }else{
            console.log('Eres menor de edad');
            return;
        }
    }else{
        console.log('Llene bien la fecha')
        return;
    }

    if(password.length >= 9 && password === confPassword){

    }else{
        console.log('Llene bien los campos: password y confPassword');
        return;
    }

    return true;
}