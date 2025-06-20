document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('enviarBtn');
    const seccionFormulario = document.getElementById('formulario');

    boton.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value.trim());

    if (nombre === '' || isNaN(edad)) {
        seccionFormulario.innerHTML = '<p style="color: red;">Por favor, completa todos los campos correctamente.</p>';
        return;
    }

    if (edad <= 0) {
        seccionFormulario.innerHTML = '<p style="color: orange;">La edad debe ser mayor a 0.</p>';
        return;
    }

    let mensaje = `Hola <strong>${nombre}</strong>, tienes <strong>${edad}</strong> años.`;
    let color = edad >= 18 ? 'green' : 'blue';

    if (edad >= 18) {
        mensaje += ' ¡Ya eres mayor de edad!';
    } else {
        mensaje += ' Aún eres menor de edad.';
    }

    seccionFormulario.innerHTML = `<p style="color: ${color};">${mensaje}</p>`;
    });
});