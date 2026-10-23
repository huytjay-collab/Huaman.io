// Conectamos con los elementos de la página
const formulario = document.getElementById('miFormulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const resultado = document.getElementById('resultado');

// Cuando se envía el formulario
formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que se recargue la página

  if (nombre.value.trim() === '') {
    resultado.textContent = 'Escribe tu nombre';
    resultado.style.color = 'red';
  } else if (correo.value.trim() === '') {
    resultado.textContent = 'Escribe tu correo';
    resultado.style.color = 'red';
  } else if (!correo.checkValidity() || !correo.value.includes('@')) {
    resultado.textContent = 'Escribe un correo válido';
    resultado.style.color = 'red';
  } else if (telefono.value.trim() === '') {
    resultado.textContent = 'Escribe tu teléfono';
    resultado.style.color = 'red';
  } else {
    resultado.textContent = '¡Registro enviado con éxito!';
    resultado.style.color = 'green';
    formulario.reset();
  }
});
