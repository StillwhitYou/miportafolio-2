// saludo.js
const saludo = document.getElementById("saludo");

function obtenerSaludo() {
  const hora = new Date().getHours();
  let mensaje = "";

  if (hora >= 5 && hora < 12) {
    mensaje = "☀️ ¡Buenos días, bienvenido a mi portafolio!";
  } else if (hora >= 12 && hora < 18) {
    mensaje = "🌤️ ¡Buenas tardes!";
  } else {
    mensaje = "🌙 ¡Buenas noches y gracias por visitar!";
  }

  saludo.textContent = mensaje;
}

// Ejecutar al cargar
window.addEventListener("DOMContentLoaded", obtenerSaludo);
