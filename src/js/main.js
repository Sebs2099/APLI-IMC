// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Se obtiene el botón con id 'enviarBtn'
    const boton = document.getElementById('enviarBtn');

    // Se obtiene la sección donde se mostrará el mensaje
    const seccionFormulario = document.getElementById('formulario');

    // Cuando se hace clic en el botón...
    boton.addEventListener('click', () => {

        // Se obtiene el valor del campo 'nombre' y se le quitan espacios
        const nombre = document.getElementById('nombre').value.trim();

        // Se obtiene el valor de 'edad', lo convierte a número y se le quitan espacios
        const edad = parseInt(document.getElementById('edad').value.trim());

        // Si el nombre está vacío o la edad no es un número...
        if (nombre === '' || isNaN(edad)) {
            // Muestra un mensaje en rojo diciendo que faltan datos
            seccionFormulario.innerHTML = '<p style="color: red;">Por favor, completa todos los campos correctamente.</p>';
            return; // Detiene la ejecución del resto
        }

        // Si la edad es menor o igual a 0...
        if (edad <= 0) {
            // Muestra un mensaje en naranja indicando que la edad debe ser mayor a 0
            seccionFormulario.innerHTML = '<p style="color: orange;">La edad debe ser mayor a 0.</p>';
            return; // También detiene la ejecución
        }

        // Si pasó todas las validaciones, se arma el mensaje base
        let mensaje = `Hola <strong>${nombre}</strong>, tienes <strong>${edad}</strong> años.`;

        // Define un color según si es mayor de edad o no
        let color = edad >= 18 ? 'green' : 'blue'; // verde si es mayor, azul si no

        // Agrega mensaje adicional según la edad
        if (edad >= 18) {
            mensaje += ' ¡Ya eres mayor de edad!';
        } else {
            mensaje += ' Aún eres menor de edad.';
        }

        // Inserta el mensaje en la página, con el color correspondiente
        seccionFormulario.innerHTML = `<p style="color: ${color};">${mensaje}</p>`;
    });
});
