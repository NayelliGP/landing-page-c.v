var getData =function(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if(nombre == ""){
        document.getElementById("nombre").focus()
    }else{
        if(email == ""){
            document.getElementById("email").focus()
            }else{
                if(mensaje == ""){
                    document.getElementById("mensaje").focus()
                }else{
                    console.log(nombre);
                    console.log(email);
                    console.log(mensaje);

                    document.getElementById("nombre").value == "";
                    document.getElementById("email").value == "";
                    document.getElementById("mensaje").value == "";

                    document.getElementById("nombre").focus();
                }
            
        }

    }
}

function enviarFormulario(){
    console.log("Enviar fotmulario ...");
    return false;
}