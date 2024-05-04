  // Obtenemos el botón y el contador
  const button = document.getElementById('clickButton');
  const counter = document.getElementById('counter');

  // Inicializamos el contador
  let count = 0;

  // Agregamos un event listener al botón para contar los clics
  button.addEventListener('click', () => {
      count++; // Incrementamos el contador
      counter.textContent = count; // Actualizamos el texto del contador
  });