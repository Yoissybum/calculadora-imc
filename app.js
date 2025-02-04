// Solicitar el nombre del usuario
let userName = prompt("Introduce tu nombre, por favor");

// Solicitar el peso del usuario
let peso = parseFloat(prompt("Introduce tu peso en Kg"));

// Solicitar la altura del usuario
let altura = parseFloat(prompt("Ahora introduce tu altura en metro"));

// Obtener el contenedor del DOM
let containerDOM = document.getElementById("container");

// Validar que los datos sean números positivos
if (isNaN(peso) || peso <= 0) {
    alert("Por favor, introduce un peso válido.");
} else if (isNaN(altura) || altura <= 0) {
    alert("Por favor, introduce una altura válida.");
} else {
    // Calcular el IMC
    let imc = peso / (altura * altura);
    
    // Mostrar el resultado
    let mensaje;
    let imagen;

    // Interpretar el resultado
    if (imc < 18.5) {
        mensaje = `¡Ten cuidado, ${userName}! Tienes bajo peso.`;
        imagen = "https://cdn-icons-png.flaticon.com/512/5559/5559962.png";
        containerDOM.style.backgroundColor = "#ff8b8b"; 
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = `¡Felicitaciones, ${userName}! Tienes un peso normal.`;
        imagen = "https://cdn-icons-png.flaticon.com/512/3476/3476424.png";
        containerDOM.style.backgroundColor = "#8bff8b"; 
    } else if (imc >= 25.0 && imc < 29.9) {
        mensaje = `¡Ouh, ${userName}! Tienes sobrepeso, cuídate ¿sí?`;
        imagen = "https://png.pngtree.com/png-vector/20220418/ourmid/pngtree-weight-machine-with-feet-a-concept-for-weight-control-and-overcoming-obesity-vector-png-image_27788322.png";
        containerDOM.style.backgroundColor = "#ffcc00"; 
    } else {
        mensaje = `¡Oh, no, ${userName}! Por favor cuida tu salud, ya llegaste a la obesidad.`;
        imagen = "https://img.freepik.com/vector-gratis/problema-obesidad-diagnostico-consulta-medica-hombre-sobrepeso-impacto-negativo-obesidad-salud-humana-organos-internos-ilustracion-metafora-concepto-aislado-vector_335657-1305.jpg";
        containerDOM.style.backgroundColor = "#ff4c4c"; 
    }

    // Mostrar el mensaje y la imagen en el contenedor
    containerDOM.innerHTML = `
        <img src="${imagen}" alt="Estado de peso">
        <h1>${mensaje}</h1>
        <h2>Tu IMC es: ${imc.toFixed(2)}</h2>
    `;
    containerDOM.style.textAlign = "center"
    containerDOM.style.fontFamily = "Arial"
    mensaje.style.fontFamily = "Arial"
}

