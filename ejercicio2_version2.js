
// // // ****** Variables ****** 
//   var formulario = document.getElementsByTagName("form")[0];
//   var nombre = document.getElementById("nombre");
//   var nombreError = document.querySelector("#nombre + span.error");

//   // ****** Validacion HTML ****** 
// formulario.addEventListener('submit', (event) => {
// if(!formulario.checkValidity()) {
// event.preventDefault();
// }
// nombreError.textContent = nombre.validationMessage;
// });

//   // ****** Validacion PERSONALIZADA ****** 
//   nombre.addEventListener('invalid',() => {
//   nombre.setCustomValidity("CASIO");
// });

// document.querySelector("#nombre").onblur = function(e) {
//   document.querySelector("#nombre").classList.add("touch");
// }

  // ****** Validacion PREGUNTA 4 ****** 
  document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    // document.querySelector("#nombre").classList.add("touch");
    var validacionesCorrectas= 0;
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var usuario = document.getElementById("usuario");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    var fecha_nacimiento = document.getElementById("fecha_nacimiento");

    // Reglas de validación para cada campo **** ¡¡¡¡¡LAS REGEX SON LA EXPRESIONES REGULARES!!!!! *****
    //     EJEMPLO-->
    //     let email = "ejemplo@gmail.com";
    // let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let result = regex.test(email);
    // console.log(result); // true
    var nombreRegex = /^[a-zA-Z]{3,20}$/;       //  ^ indica el inicio de la cadena, * 0 o mas veces , $ indica el final de la cadena, \s permite espacios en blanco.
    var apellidosRegex = /^[a-zA-Z]{4,40}$/;
    var usuarioRegex = /^[a-zA-Z]{7}$/;
    var emailRegex =/^[a-zA-Z]{7}@gmail\.com$/;
    // var emailRegex = new RegExp(usuarioRegex.source + "@gmail\.com$");

    // var emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ --> 
    // const email = "example@example.com";
    // const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // if (pattern.test(email)) {
    //   console.log("La dirección de correo electrónico es válida");
    // } else {
    //   console.log("La dirección de correo electrónico no es válida");
    // }


    var telefonoRegex = /^[6-9][0-9]{8}$/;
    // var telefonoRegex = var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/; --> ###-###-####.
    // var fechaRegex = /^([1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    var fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    var url = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    // var tarjeraCreditoRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/


    // Método	Descripción
    // exec()	Ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un arreglo de información o null en una discrepancia.
    // test()	Prueba una coincidencia en una cadena. Devuelve true o false.
    // match()	Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura, o null si no se encuentra ninguna coincidencia.
    // matchAll()	Devuelve un iterador que contiene todas las coincidencias, incluidos los grupos de captura.
    // search()	Prueba una coincidencia en una cadena. Devuelve el índice de la coincidencia, o -1 si la búsqueda falla.
    // replace()	Ejecuta una búsqueda por una coincidencia en una cadena y reemplaza la subcadena coincidente con una subcadena de reemplazo.
    // replaceAll() (en-US)	Ejecuta una búsqueda de todas las coincidencias en una cadena y reemplaza las subcadenas coincidentes con una subcadena de reemplazo.
    // split()	Utiliza una expresión regular o una cadena fija para dividir una cadena en un arreglo de subcadenas.

// expresión regular que busca uno o más caracteres seguidos de un espacio y busca esta combinación en toda la cadena -->
// var re = /\w+\s/g;
// var str = 'fee fi fo fum';
// var myArray = str.match(re);
// console.log(myArray);
// ["fee ", "fi ", "fo "]

//     ^ indica el inicio de la cadena
// (0[1-9]|[12][0-9]|3[01]) valida el día, acepta días del 01 y 31.
// [- /.] se encarga de validar el separador, en este caso un guión, una barra o un punto.
// (0[1-9]|1[012]) validar el mes, permitiendo solo dígitos entre 01 y 12.
// [- /.] se encarga de validar el separador, en este caso un guión, una barra o un punto.
// (19|20)\d\d validar el año, permitiendo solo dígitos entre 1900 y 2099.
// $ indica el final de la cadena.
// Esta expresión regular valida que el valor ingresado sea una fecha válida en el formato "dd/mm/yyyy", por ejemplo: "31/12/2020".
// Tengan en cuenta que esta expresión regular es para el formato "dd/mm/yyyy" si desean utilizar otro formato deben modificar la expresión.


    // Valida cada campo y añade/quita la clase "error" según sea necesario
    // validateError("nombre", nombreRegex);



    // ------------------------------------NOMBRE---------------------------------------
    if (nombre.value) {                       // Si tiene valor... Mirame sus expresiones regulares y me añades errores en funcion de ellas
        if (!nombreRegex.test(nombre.value)) {
            nombre.classList.add("error");
            document.querySelector("#msg-nombre").innerHTML = "<br><b>NOMBRE no puede contener caracteres especiales ni números</b><br>";
        } if (nombre.value.length < 3 || nombre.value.length > 20) {
            nombre.classList.add("error");
            document.querySelector("#msg-nombre").innerHTML = "<br><b>NOMBRE debe tener entre 3 y 20 caracteres</b><br>";
        } else {
            nombre.classList.remove("error"); // Si tiene valor pero no hay errores
            document.querySelector("#msg-nombre").innerHTML = ""; //Quitamos el mensaje de error en caso de que lo corrijas
            validacionesCorrectas++;
        }
    } else{                                    // Si no tiene valor, pero solo al darle al submit, para que no aparezca de primeras.
      nombre.classList.add("error");
      document.querySelector("#msg-nombre").innerHTML = "<br><b>El campo NOMBRE es obligatorio</b><br>";
    }


    // ------------------------------------APELLIDOS---------------------------------------
    if (apellidos.value) {                       // Si tiene valor... Mirame sus expresiones regulares y me añades errores en funcion de ellas
        if (!apellidosRegex.test(apellidos.value)) {
            apellidos.classList.add("error");
            document.querySelector("#msg-apellidos").innerHTML = "<br><b>APELLIDOS no pueden contener caracteres especiales ni números</b><br>";
        }  else if (apellidos.value.length < 3 || apellidos.value.length > 20) {
            apellidos.classList.add("error");
            document.querySelector("#msg-apellidos").innerHTML = "<br><b>APELLIDOS debe tener entre 4 y 40 caracteres.</b><br>";
        } else {
          apellidos.classList.remove("error"); // Si tiene valor pero no hay errores
          document.querySelector("#msg-apellidos").innerHTML = ""; 
          validacionesCorrectas++;
        }
    } else{                                    // Si no tiene valor, pero solo al darle al submit, para que no aparezca de primeras.
      apellidos.classList.add("error");
      document.querySelector("#msg-apellidos").innerHTML = "<br><b>El campo APELLIDOS es obligatorio</b><br>";
    }

    
    // ------------------------------------USUARIO---------------------------------------
    if (usuario.value) {  
        // ¡¡Con esta función, si pones valor en el usuario, se pondrá automáticamente en el email!!
        usuario.oninput = function(){
        email.value = usuario.value + "@gmail.com";
        }                 
        if (!usuarioRegex.test(usuario.value)) {
            usuario.classList.add("error");
             document.querySelector("#msg-usuario").innerHTML = "<br><b>USUARIO al menos deben de ser 7 caracteres</b><br>";
        } else {
          usuario.classList.remove("error");
          document.querySelector("#msg-usuario").innerHTML = ""; 
          validacionesCorrectas++; 
        }
    } else{                                  
      usuario.classList.add("error");
      document.querySelector("#msg-usuario").innerHTML = "<br><b>USUARIO campo obligatorio</b><br>";
    }


    // ------------------------------------EMAIL---------------------------------------
    if (email.value) {                       
        if (!emailRegex.test(email.value)) {
             email.classList.add("error");
             document.querySelector("#msg-email").innerHTML = "<br><b>CORREO introducido no es email</b><br>";
                }else {
          email.classList.remove("error"); 
          document.querySelector("#msg-email").innerHTML = "";
          validacionesCorrectas++;  
        }
    } else{                                  
      email.classList.add("error");
      document.querySelector("#msg-email").innerHTML = "<br><b>CORREO campo obligatorio</b><br>";
    }
    

  // --------------------------------------TELEFONO---------------------------------------
    if (telefono.value) {         
        if (!telefonoRegex.test(telefono.value)) {
            telefono.classList.add("error");
            document.querySelector("#msg-telefono").innerHTML = "<br><b>TELÉFONO debe comenzar por 6, 7, 8 o 9 y tener una extensión fija de 9 cifras</b><br>";
        }  else {
          telefono.classList.remove("error"); // Si tiene valor pero no hay errores
          document.querySelector("#msg-telefono").innerHTML = "";
          validacionesCorrectas++; 
        }
    } else{                                    // Si no tiene valor, pero solo al darle al submit, para que no aparezca de primeras.
      telefono.classList.add("error");
      document.querySelector("#msg-telefono").innerHTML = "<br><b>TELÉFONO campo obligatorio</b><br>";
    }


 // ------------------------------------FECHA DE NACIMIENTO---------------------------------------
var hoy = new Date();
if(fecha_nacimiento.value){         
    if(!isNaN(Date.parse(fecha_nacimiento.value))){    // Testeamos si el valor es una fecha válida. La función "Date.parse" analiza una cadena de fecha y devuelve el número de milisegundos
        var cumple = new Date(fecha_nacimiento.value);                      //Si la fecha es válida se crea un nuevo objeto Date "CUMPLE" con la fecha de nacimiento
        var diferenciaAños = hoy.getFullYear() - cumple.getFullYear();      // Se utiliza el método getFullYear() para obtener el año de la fecha de nacimiento y el año actual,
        var diferenciaMeses = hoy.getMonth() - cumple.getMonth();           // getMonth() para obtener el mes de la fecha de nacimiento y el mes actual.
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < cumple.getDate())) {
            diferenciaAños--;
        }
        if (diferenciaAños < 18 || diferenciaAños > 99) {
            document.getElementById("fecha_nacimiento").classList.add("error");
            document.querySelector("#msg-fecha_nacimiento").innerHTML = "<br><b>La red social no es adecuada para usuarios menores de 18 o mayores de 99 años</b><br>";
        } else {
            document.getElementById("fecha_nacimiento").classList.remove("error");
            document.querySelector("#msg-fecha_nacimiento").innerHTML = ""; 
            validacionesCorrectas++; 
        }
    }else{
        document.getElementById("fecha_nacimiento").classList.add("error");
        document.querySelector("#msg-fecha_nacimiento").innerHTML = "<br><b>FECHA DE NACIMIENTO introducida no es una fecha con el formato correcto: "+
        "'YYYY-MM-DD', es decir, AÑOS, MESES, DÍAS."+"<br> Utiliza de separador guiones '-' o barras '/'. Por ejemplo: 2000-02-12. </b><br>";
    }   
}else{                                  
    document.getElementById("fecha_nacimiento").classList.add("error");
    document.querySelector("#msg-fecha_nacimiento").innerHTML = "<br><b>FECHA DE NACIMIENTO campo obligatorio</b><br>";
}


    // ***************MENSAJES DE BOTON VALIDACION Y SI SE VALIDA MENSAJE DE CREAR CUENTA************
if(validacionesCorrectas == 6){
    document.getElementById("validacion").style.display = "block";
    document.getElementById("OK").classList.remove("hidden");
    document.getElementById("exito").classList.remove("hidden");
    
    document.getElementById("OK").addEventListener("click", function(){
        document.getElementById("exito").style.display = "block";
    });
} else{
    document.getElementById("OK").classList.add("hidden");
    document.getElementById("exito").classList.add("hidden");
}

});

// function validateError(nombreCampo, regex) {
//   var campo = document.getElementById(nombreCampo);
//   if (campo.value) {
//     if (!regex.test(campo)) {
//       campo.classList.add("error");
//       document.querySelector("#msg-" + nombreCampo).innerHTML = "<b>"+nombreCampo+" no puede contener caracteres espaciales ni números</b>";
//     } else {
//       campo.classList.remove("error");
//     }
//   } else {
//     campo.classList.add("error");
//     document.querySelector("#msg-nombre").innerHTML = "<b>El campo es obligatorio</b>";
//   }
// }


