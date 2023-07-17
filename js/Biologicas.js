//Necesario para el Ajax de el formulario biológicas
$(document).ready(function() {
    $('#macroinvertebrateForm').submit(function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      var formData = $(this).serialize(); // Obtener los datos del formulario
  
      $.ajax({
        type: 'POST',
        url: '/insertMacroinvertebrates',
        data: formData,
        success: function(response) {
          console.log('Inserción exitosa');
          // Aquí puedes agregar cualquier código adicional para actualizar la página o mostrar una confirmación de éxito
        },
        error: function(error) {
          console.error('Error en la inserción:', error);
          // Aquí puedes manejar el error de inserción y mostrar un mensaje al usuario si es necesario
        }
      });
    });
  });