const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const email = document.getElementById("email")
const password = document.getElementById("contraseña")
const errores = document.getElementById("errores")

document.getElementById("btGuardar").addEventListener("click", validar);

function validar() {
    const emailEsCorrecto = validateEmail2(email)
    // console.log(validateEmail(email.value))

    let mensajeError = ""

    if (!emailEsCorrecto) {
        //alert("Email incorrecto")
        mensajeError += "<br>Email incorrecto"
    }

    //Otra opcion de Regex (comprobacion)
    //const regex = /[^a-zA-Z]/g;
    const regex = /\d/

    const tieneNumeros = regex.test(nombre.value)
    const longitudMenor3 = nombre.value.length < 3

    if (tieneNumeros || longitudMenor3) {
        //alert("Nombre incorrecto")
        mensajeError += "<br>Nombre incorrecto"
    }

    const longitudPasswordCorrecta = password.value.length >= 6
    if (!longitudPasswordCorrecta) {
        //alert("Contraseña demasiado corta")
        mensajeError += "<br>Contraseña demasiado corta"
    }


    const tieneNumerosApellidos = regex.test(apellidos.value)
    const longitudMenor3Apellidos = apellidos.value.length < 3

    if (tieneNumerosApellidos || longitudMenor3Apellidos) {
        //  alert("Apellido incorrecto")
        mensajeError += "<br>Apellido incorrecto"
    }


    errores.innerHTML = ""
    //Comprobamos que todos los campos sean correctos
    if (emailEsCorrecto
        && !tieneNumeros
        && !longitudMenor3
        && longitudPasswordCorrecta
        && !tieneNumerosApellidos
        && !longitudMenor3Apellidos) {

        alert("Usuario registrado")
    } else {
        //  alert(mensajeError)
        errores.innerHTML = mensajeError
    }

}


function validateEmail(mail) {
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (validRegex.test(mail)) {
        return true
    }
    return false
}


function validateEmail2(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}