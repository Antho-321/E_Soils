document.getElementById("formEditProfile").addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const formData = new FormData(this); // Obtiene los datos del formulario

  fetch("http://localhost:3000/postEditProfile", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Aquí puedes manejar la respuesta del servidor
    })
    .catch((error) => {
      console.error("Error capturado:  ", error);
    });
});
