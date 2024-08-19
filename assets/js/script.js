// Función para determinar el ganador
function determinarGanador(usuario, maquina) {
    if (usuario === maquina) {
        return 'empate';
    }
    if (
        (usuario === 0 && maquina === 2) ||  // Piedra gana a Tijeras
        (usuario === 1 && maquina === 0) ||  // Papel gana a Piedra
        (usuario === 2 && maquina === 1)     // Tijeras gana a Papel
    ) {
        return 'usuario';
    }
    return 'maquina';
}

// Función para generar el movimiento de la máquina
function jugarMaquina() {
    const opciones = [0, 1, 2]; // 0: Piedra, 1: Papel, 2: Tijeras
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

// Función principal del juego
function jugarPiedraPapelTijeras() {
    let veces = parseInt(prompt('¿Cuántas veces te gustaría jugar?:'), 10);
    if (isNaN(veces) || veces <= 0) {
        alert('Por favor, ingresa un número válido mayor que cero.');
        return;
    }

    for (let i = 0; i < veces; i++) {
        let movimientoUsuario = parseInt(prompt('Elige tu movimiento: 0 para Piedra, 1 para Papel, 2 para Tijeras:'), 10);
        while (![0, 1, 2].includes(movimientoUsuario)) {
            movimientoUsuario = parseInt(prompt('Opción inválida. Elige entre 0 para Piedra, 1 para Papel, 2 para Tijeras:'), 10);
        }

        const movimientoMaquina = jugarMaquina();
        const resultado = determinarGanador(movimientoUsuario, movimientoMaquina);

        const movimientos = ['Piedra', 'Papel', 'Tijeras'];
        alert(`Tu movimiento: ${movimientos[movimientoUsuario]}\nMovimiento de la máquina: ${movimientos[movimientoMaquina]}\nResultado: ${resultado === 'empate' ? '¡Es un empate!' : resultado === 'usuario' ? '¡Felicidades, ganaste!' : 'Lo siento, perdiste.'}`);
    }
}

// Función para iniciar el juego cuando se haga clic en el botón
function iniciarJuego() {
    jugarPiedraPapelTijeras();
}
