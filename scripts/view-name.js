const usuario = JSON.parse(localStorage.getItem('Usuario'));
const salir = document.querySelector('#salir');
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

mostrarUsuario();

menu.addEventListener('click', () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
});

salir.addEventListener('click', () =>{
    logout();
});

function mostrarUsuario(){
    if(usuario === null){
        window.location.href = '../register-login.html';
    }else{
        let textoUsuario = document.querySelectorAll('.username');
        let {nombre, apellido} = usuario;

        textoUsuario.forEach(user =>{
            user.textContent = `${nombre} ${apellido}`;
        });
    }
}

function logout(){
    localStorage.removeItem('Usuario');
    window.location.href = '../register-login.html';
}