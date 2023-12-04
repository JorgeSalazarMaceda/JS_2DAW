
/********************************************* VARIABLES *********************************************/

var form=document.getElementById('formulario')
var nombre = document.getElementById('nombre');
var apellidos = document.getElementById('apellidos');
var usuario = document.getElementById('usuario');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var nacimiento = document.getElementById('nacimiento');
var nacimientoError = document.getElementById('nacimientoError');
var boton=document.getElementById("boton");                  //Boton submit


/********************************************* LLAMADAS A LAS FUNCIONES *********************************************/
/********************************************* DECLARACION DE LOS INPUTS Y SUS ERRORES *********************************************/

form.addEventListener('submit',(event)=>event.preventDefault()); // Con esto evitamos el event.preventDefault());

function validarFormulario() {
   validacionNombre();
   validacionApellido();
   validacionUsuario();
   validacionEmail();
   validacionTelefono();
   validacionFechaNacimiento();
   if (formulario.checkValidity()) {
      // elimina la clase "hidden" del elemento de mensaje
      document.getElementById("msg-TodoCorrecto").classList.remove("hidden");
   }
}

// document.getElementById("boton").insertAdjacentHTML("beforebegin","<span id='nombreError'></span>"); 
// Cogeme boton y desde boton, antes del boton me insertas el span
// Si pusiera after seria despues del botón.

/********************************************* VALIDACION NOMBRE *********************************************/
   function validacionNombre() {
      /*extraes la informacion */
      // let nombreError = document.getElementById('nombreError');

      if (!nombre.checkValidity()) { // True o false. Comprueba si "nombre" es válido utilizando el método "checkValidity()
         /*Si NO ES VÁLIDO creas el SPAN DE ERRROR con un ID */
         if (document.getElementById("nombreError") == null) {    // Si hay error crea el span de error y lo inserta antes del boton validar--> El id boton está justo al llamar a la validación. Por eso se van insertando los errores ANTES (beforebegin) del boton VALIDAR
            document.getElementById("boton").insertAdjacentHTML("beforebegin","<span id='nombreError'></span>");
         }

         let nombreError = document.getElementById("nombreError"); //Asignamos el span de error a la variable error
         nombre.setAttribute("class", "error");                    // Asignamos el atributo clase con el valor error al campo nombre
         // element.setAttribute(name, value); -->  "element" es el elemento HTML (En este caso el input) al que se desea agregar o modificar un atributo, "name" es el nombre del atributo y "value" es el valor del atributo.

         // Con if y else normal -->
         // if (nombre.validity.valueMissing){
         //    nombreError.innerHTML = "<b>NOMBRE</b> campo obligatorio";
         // }
         // if(nombre.validity.tooShort || nombre.validity.tooLong){
         //    nombreError.innerHTML = "<b>NOMBRE</b> debe tener entre 3 y 20 caracteres";
         // }
         // if(nombre.validity.patternMismatch){
         //    nombreError.innerHTML = "<b>NOMBRE</b> no puede contener caracteres espaciales ni números";
         // }
         
         // Con operador ternario-->
         nombre.validity.valueMissing ? nombreError.innerHTML = "<b>NOMBRE campo obligatorio</b><br>" : false;
         nombre.validity.tooShort || nombre.validity.tooLong ? nombreError.innerHTML = "<b>NOMBRE debe tener entre 3 y 20 caracteres</b><br>" : false;
         nombre.validity.patternMismatch ? nombreError.innerHTML = "<b>NOMBRE no puede contener caracteres espaciales ni números</b><br>" : false;

         // Teoría -->
         // Validity es un objeto que contiene información sobre la validez de un campo de formulario en un documento HTML. 
         // Este objeto contiene diferentes propiedades, como valueMissing, tooShort, tooLong, patternMismatch, entre otras, 
         // que indican si el campo está vacío, si es demasiado corto o demasiado largo, o si no cumple con un patrón específico.
         // Cada una de estas propiedades es una booleana que indica si la condición especificada se ha cumplido o no. 
         // Por ejemplo, la propiedad valueMissing es verdadera si el campo está vacío y falsa si tiene un valor. 
         // Estas propiedades son automaticamente establecidas por el navegador y son utilizadas para facilitar la validación de los campos del formulario.
      
      }
      else { //Si no hay error, borras el span de error
         if (document.getElementById("nombreError") != null) { // Borra el error <span>
            document.getElementById("nombreError").remove();
         }
         nombre.removeAttribute("class");    // Se elimina el atributo class si no hay fallos.
          
      }
   }
    
 /******************************************** VALIDACION APELLIDOS ***************************************/
   function validacionApellido(){
  
   if (!apellidos.checkValidity()) {
      
      if(document.getElementById("apellidosError") == null){
         document.getElementById("boton").insertAdjacentHTML("beforebegin",'<span id="apellidosError"></span>');
      }
   
      let apellidosError=document.getElementById("apellidosError");
      apellidos.setAttribute("class", "error");

      apellidos.validity.valueMissing ? apellidosError.innerHTML = "<b>APELLIDOS campo obligatorio</b><br>" : false;
      apellidos.validity.tooShort || apellidos.validity.tooLong ? apellidosError.innerHTML = "<b>APELLIDOS debe tener entre 4 y 40 caracteres</b><br>" : false;
      apellidos.validity.patternMismatch ? apellidosError.innerHTML = "<b>APELLIDOS no puede contener caracteres espaciales ni números</b><br>" : false;
   }
   else {
      
      if(document.getElementById("apellidosError")!=null){
      document.getElementById("apellidosError").remove();
      }
      apellidos.removeAttribute("class");  
       
   }

}
 
/********************************************* VALIDACION USUARIO *********************************************/

   function validacionUsuario(){

   if (!usuario.checkValidity()) {

      if(document.getElementById("usuarioError")==null){
         document.getElementById("boton").insertAdjacentHTML("beforebegin",'<span id="usuarioError"></span>');
      }
   
      let usuarioError=document.getElementById("usuarioError");
      usuario.setAttribute("class", "error");

      usuario.validity.valueMissing ? usuarioError.innerHTML = "<b>USUARIO campo obligatorio</b><br>" : false;
      usuario.validity.patternMismatch ? usuarioError.innerHTML = "<b>USUARIO debe tener al menos 7 caracteres</b><br>" : false;
   }
   else {
      
      if(document.getElementById("usuarioError")!=null){
         document.getElementById("usuarioError").remove();
         }
         usuario.removeAttribute("class"); 
           
   }
}

/********************************************* VALIDACION EMAIL *********************************************/
function validacionEmail(){


   if (!email.checkValidity() || usuario.value+"@gmail.com"!=email.value) {

      if(document.getElementById("emailError") == null){
         boton.insertAdjacentHTML("beforebegin","<span id='emailError'><span>")
      }

      let emailError = document.getElementById('emailError');
      email.setAttribute("class", "error");

      // emailError.innerHTML = "<b>CORREO debe ser "+usuario.value+"@gmail.com</b>";

      if(email.validity.valueMissing){
       emailError.innerHTML = "<b>CORREO campo obligatorio</b><br>";
      }
      else if(email.validity.patternMismatch){
          emailError.innerHTML = "<b>CORREO introducido no es email, debe ser tu usuario+@gmail, ej: "+usuario.value+"@gmail.com</b><br>";
      }
    
   }
   else {
     
      if(document.getElementById("emailError") != null){
         document.getElementById("emailError").remove();
      }
      email.removeAttribute("class");  
       
   }
}
 
/********************************************** VALIDACION TELEFONO ********************************************/
   function validacionTelefono(){
      if (!telefono.checkValidity()) {

         if(document.getElementById("telefonoError") == null){
            boton.insertAdjacentHTML("beforebegin", "<span id='telefonoError'></span>")
         }

         let telefonoError = document.getElementById('telefonoError');
         telefono.setAttribute("class", "error");

         telefono.validity.valueMissing ? telefonoError.innerHTML = "<b>TELÉFONO campo obligatorio</b><br>" : false;
         telefono.validity.patternMismatch ? telefonoError.innerHTML = "<b>TELÉFONO debe comenzar por 6, 7, 8 o 9 y tener una extensión fija de 9 cifras</b><br>" : false;
      }
      else {
         if(document.getElementById("telefonoError") != null){
            document.getElementById("telefonoError").remove();
         }
         telefono.removeAttribute("class");     
      }
   }


/********************************************* VALIDACION FECHA DE NACIMIENTO ***********************************************/
function validacionFechaNacimiento(){
   if (!nacimiento.checkValidity()) {
    
      //si el input esta vacio, insertamos el span con id nacimientoError
      if(document.getElementById("nacimientoError") == null){
         boton.insertAdjacentHTML("beforebegin", "<span id='nacimientoError'></span>")
      }

      let nacimientoError = document.getElementById('nacimientoError');
      nacimiento.setAttribute("class", "error");

      nacimiento.validity.valueMissing ? nacimientoError.innerHTML = "<b>FECHA DE NACIMIENTO campo obligatorio</b><br>" : false;
      nacimiento.validity.patternMismatch ? nacimientoError.innerHTML = "<b>FECHA DE NACIMIENTO introducida no es una fecha</b><br>" : false;
   }
   else {

      if(document.getElementById("nacimientoError")!=null){
         document.getElementById("nacimientoError").remove();
      }
      nacimiento.removeAttribute("class");

       //cojemos el valor del input de fecha
       let fechaNacimiento = document.getElementById("nacimiento").value;
       console.log(fechaNacimiento);

       //creamos la fecha de hoy
       let fechaActual = new Date();
       let edadMinima = 18;
       let edadMaxima = 99;

       // Convertimos la fecha de nacimiento en un objeto de fecha
       let fechaNacimientoDate = new Date(fechaNacimiento);

       // Calculamos la edad
       let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();        // Se utiliza el método getFullYear() para obtener el año de la fecha de nacimiento y el año actual
       var mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();               // getMonth() para obtener el mes de la fecha de nacimiento y el mes actual.
       if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
          edad--;
       }
       if(edad<= edadMinima || edad>=edadMaxima ){
         if(document.getElementById("nacimientoError") == null){
            boton.insertAdjacentHTML("beforebegin","<span id='nacimientoError'><span>")
          }

      let nacimientoError = document.getElementById('nacimientoError');
      nacimiento.setAttribute("class", "error");
      nacimientoError.innerHTML = "<b>La red social no es adecuada para usuarios menores de 18 o mayores de 99 años.</b><br>";
         }
    
         if(document.getElementById("fechaNacimientoError") != null){
          document.getElementById("fechaNacimientoError").remove();
         }
   }  
}




