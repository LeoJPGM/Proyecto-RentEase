// Validacion Register

const btnRegistrar = document.querySelector('.button__register');

btnRegistrar.addEventListener('click', evento => {
    evento.preventDefault();
    registrarUsuario();
});

const registrarUsuario = () =>{
    const cedula = document.querySelector('.input__cedula').value;
    const nombre = document.querySelector('.input__nombre').value;
    const apellido = document.querySelector('.input__apellido').value;
    const email = document.querySelector('.input__email').value;
    const telefono = document.querySelector('.input__telefono').value;
    const fecha = document.querySelector('.input__fecha').value;
    const password = document.querySelector('.input__password').value;
    const confPassword = document.querySelector('.input__confPassword').value;

    if(validarDatosPersonales(cedula, nombre, apellido, telefono) && validarDatosImportantes(email, password, confPassword) && validarFecha(fecha) === true){
        console.log('Correcto usuario creado');
        const nuevoUsuario = crearUsuario(cedula, nombre, apellido, email, telefono, fecha, password);
        localStorage.setItem('usuario' ,JSON.stringify(nuevoUsuario));
    }else{
        console.log('Error');
    }
}

const crearUsuario = (cedula, nombre, apellido, email, telefono, fecha, password) =>{
    const user = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        fecha: fecha,
        password: password
    }
    return user;
}

const validarDatosPersonales = (cedula, nombre, apellido, telefono) => {
    
    if(cedula === '' || nombre === '' || apellido === '' || telefono === ''){
        console.log('Los campos estan vacios');
    }else{
        console.log('Campos correctos');
        return true;
    }
}

const validarDatosImportantes = (email, password, confPassword) => {
    let expEmail = /\S+@\S+\.\S+/;

    if(password.length >= 9 && password === confPassword && expEmail.test(email)){
        console.log('Correcto');
        return true;
    }else{
        console.log('Llene todos los campos correctamente');
    }
}

const validarFecha = fecha => {
    let nuevaFecha = parseInt(fecha);

    if(nuevaFecha <= 2006){
        console.log('correcto');
        return true;
    }else if(fecha === ''){
        console.log('Llene el campo correctamente');
    }else{
        console.log('Es menor de edad');
    }
}