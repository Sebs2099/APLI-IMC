function calcularIMC () {
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").textContent = "ingrese números válidos en peso y altura";
        return;
    }

    const imc = peso / (altura * altura);
    let estado;
    if (imc < 18.5) {
        estado = "Bajo peso";
    } else if (imc < 24.9) {
        estado = "Peso normal";
    } else if (imc < 29.9) {
        estado = "Sobrepeso";
    } else {
        estado = "Obesidad";
    }

    document.getElementById("resultado").textContent = `Tu IMC es ${imc.toFixed(2)} y tu estado es: ${estado}`;
}


