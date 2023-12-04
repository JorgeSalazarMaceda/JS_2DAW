
    document.getElementById('formulario').onsubmit = function(event) {
  event.preventDefault(); // Previene el comportamiento por defecto del navegador, en este caso, el envío del formulario

  // ****** Obtiene los valores de los campos del formulario ******
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var usuario = document.getElementById('usuario').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;
  var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
  var fotoPerfil = document.getElementById('fotoPerfil').value;


  // ****** Valida que se hayan seleccionado al menos 2 intereses ******
  var intereses = document.getElementsByName('intereses');
  var interesesSeleccionados = 0;
  for (var i = 0; i < intereses.length; i++) {
    if (intereses[i].checked) {
      interesesSeleccionados++;
    }
  }
  if (interesesSeleccionados < 2) {
    alert('Por favor selecciona al menos 2 intereses');
    return;
  }

  // ****** Valida que el usuario tenga al menos 18 años ******
  var hoy = new Date();
  var cumpleanos = new Date(fechaNacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  if (hoy.getMonth() < cumpleanos.getMonth() || (hoy.getMonth() == cumpleanos.getMonth() && hoy.getDate() < cumpleanos.getDate())) {
    edad--; 
  }
  if (edad < 18) {
    alert('Por favor ingresa una fecha de nacimiento válida (debes tener al menos 18 años)');
    return;
  }

  // ****** Cargar imagen (Intentos) ******
  // let imagen = document.createElement('img');
  // imagen.src = URL.createObjectURL(fotoPerfil.files[0]);
  // document.getElementById("fotoPerfil").appendChild(imagen);

  // document.getElementById('fotoPerfil').onchange = function(e) {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = function(){
  //     let mostrarImagen = document.getElementById('mostrarImagen');
  //     imagen = document.createElement('img');
  //     imagen.src = reader.result;
  //     mostrarImagen.append(imagen);
  //   }
  // }


  var modal = document.getElementById("mensajeExito");
  modal.style.display = "block";

  // Si se han superado todas las validaciones, se puede procesar la información para crear la cuenta
  // (Aquí puedes agregar código para enviar los datos a una base de datos o al servidor)
}

// ****** Funcion Cargar imagen ******
document.getElementById('fotoPerfil').onchange = function(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(){
      let mostrarImagen = document.getElementById('mostrarImagen');
      imagen = document.createElement('img');
      imagen.src = reader.result;
      imagen.style.width="300px";
      imagen.style.height="250px";
      mostrarImagen.append(imagen);

      // https://www.youtube.com/watch?v=jLK-vq338HM&ab_channel=DirectoAlGrano
    }
  }

  // function mostrarImagen(){
  //   var archivo = document.getElementById('fotoPerfil').files[0];
  //   var reader = new FileReader();
  //   if(fotoPerfil){reader.readAsDataURL(archivo);
  //     reader.onloadend = function(){
  //       document.getElementById().src=
  //     }
  //   }
  // }


