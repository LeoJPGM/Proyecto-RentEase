const loginBtn = document.querySelector('#login');
const registerBtn = document.querySelector('#register');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const resultLogin = document.querySelector('.login-form');

const listaUsuarios = JSON.parse(localStorage.getItem('Usuarios'));

const logearBtn = document.querySelector('#logear');
const registrarBtn = document.querySelector('#registrar');

logearBtn.addEventListener('click', () =>{
    login();
});
registrarBtn.addEventListener('click', () =>{
    register();
});

loginBtn.addEventListener('click', () =>{
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity =0;
});

registerBtn.addEventListener('click', () =>{
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity =1;
});

function login(){
    let email = document.querySelector('#email-login').value;
    let password = document.querySelector('#password-login').value;
    let inputEmail = document.querySelector('#email-login');
    let inputPassword = document.querySelector('#password-login');

    if(listaUsuarios){
        let verfUsuario = listaUsuarios.some(usuario => (usuario.email === email && usuario.password === password));

        if(verfUsuario){
            let usuario = listaUsuarios.find(datos => datos.email === email);
            let usuarioLogeado = JSON.stringify(usuario);
            localStorage.setItem('Usuario', usuarioLogeado);
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1000);
        }else{
            noUsuario();
            inputEmail.classList.add('border-error');
            inputPassword.classList.add('border-error');
            setTimeout(() => {
                location.reload();
            }, 1200);
        }
    }
}

function register(){
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let email = document.querySelector('#email').value;
    let exEmail = /\S+@\S+\.\S+/;
    let fecha = document.querySelector('#fecha').value;
    let password = document.querySelector('#password').value;
    let confPassword = document.querySelector('#confpassword').value;

    let usuarios = [];

    if(validaciones(nombre, apellido, email, exEmail, fecha, password, confPassword)){
        if(listaUsuarios){
            let usuarioUnico = listaUsuarios.some(usuario => (usuario.email === email));
            if(usuarioUnico){
                console.log('Usuario ya registrado');
                return;
            }
            usuarios = JSON.stringify([...listaUsuarios, {'nombre': nombre, 'apellido': apellido, 'email': email, 'fecha': fecha, 'password': password, 'id': generarIdIncremental()}]);
        }else{
            usuarios = JSON.stringify([{'nombre': nombre, 'apellido': apellido, 'email': email, 'fecha de nacimiento': fecha, 'password': password, 'id': generarIdIncremental()}]);
        }
    
        localStorage.setItem('Usuarios', usuarios);
        location.reload();
    }else{
        console.log('Fallo en la validacion');
    }
}

function logout(){
    localStorage.removeItem('Usuario');
}

function obtenerUltimoId(){
    return parseInt(localStorage.getItem('ultimoId') || '0', 10);
}

function guardarUltimoId(id){
    localStorage.setItem('ultimoId', id.toString());
}

function generarIdIncremental(){
    const ultimoId = obtenerUltimoId();
    const nuevoId = ultimoId + 1;
    guardarUltimoId(nuevoId);
    return nuevoId;
}

function noUsuario(){
    const noUsuario = document.createElement('p');
    noUsuario.classList.add('error');
    noUsuario.textContent = 'No existe el usuario';
    resultLogin.appendChild(noUsuario);
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