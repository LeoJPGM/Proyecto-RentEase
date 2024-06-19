const usuario = JSON.parse(localStorage.getItem('Usuario'));
const salir = document.querySelector('#salir');

mostrarUsuario();

salir.addEventListener('click', () =>{
    logout();
});

function mostrarUsuario(){
    if(usuario === null){
        window.location.href = '../register-login.html';
    }else{
        let textoUsuario = document.querySelector('.username');
        let {nombre, apellido} = usuario;

        textoUsuario.textContent = `${nombre} ${apellido}`;
    }
}

function logout(){
    localStorage.removeItem('Usuario');
    window.location.href = '../register-login.html';
}