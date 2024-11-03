// Configuración de Phaser
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let ball, pins;
let forceSlider, massSlider, launchButton, resultText;

// Función de precarga
function preload() {
    this.load.image('ball', 'path/to/ball.png'); // Ruta de la imagen de la bola
    this.load.image('pin', 'path/to/pin.png');   // Ruta de la imagen del pin
}

// Función de creación
function create() {
    this.add.text(20, 20, 'Ajusta la fuerza y la masa de la bola', { fontSize: '20px', fill: '#fff' });

    // Creando la bola
    ball = this.physics.add.sprite(100, 300, 'ball').setInteractive();
    ball.setCollideWorldBounds(true);
    ball.setBounce(0.5);

    // Creando pines
    pins = this.physics.add.staticGroup();
    for (let i = 0; i < 10; i++) {
        const pinX = 600 + (i % 4) * 30; // Posicionando los pines
        const pinY = 200 + Math.floor(i / 4) * 50;
        pins.create(pinX, pinY, 'pin');
    }

    // Deslizador de fuerza
    forceSlider = this.add.dom(650, 50).createElement('input').setAttribute('type', 'range').setAttribute('min', '0').setAttribute('max', '100');
    
    // Deslizador de masa
    massSlider = this.add.dom(650, 100).createElement('input').setAttribute('type', 'range').setAttribute('min', '1').setAttribute('max', '10');

    // Botón de lanzar
    launchButton = this.add.text(650, 150, 'Lanzar', { fontSize: '20px', fill: '#fff' })
        .setInteractive()
        .on('pointerdown', launchBall);

    // Texto para resultados
    resultText = this.add.text(20, 550, '', { fontSize: '20px', fill: '#fff' });
}

// Función de actualización
function update() {
    // Aquí podrías agregar lógica adicional si es necesario
}

// Función para lanzar la bola
function launchBall() {
    const force = forceSlider.value;
    const mass = massSlider.value;

    // Calcular la aceleración
    const acceleration = force / mass;

    // Aplicar la fuerza a la bola
    ball.setVelocityX(force); // Se puede ajustar para usar la aceleración
    resultText.setText(`Aceleración: ${acceleration.toFixed(2)} m/s²`);

    // Opcional: reiniciar la bola después de un tiempo
    setTimeout(() => {
        ball.setVelocity(0);
        ball.x = 100; // Reiniciar la posición de la bola
    }, 2000); // 2 segundos para que la bola se detenga
}

// Colisiones
this.physics.add.collider(ball, pins, () => {
    // Aquí puedes agregar lógica para ver qué pines han sido derribados
    console.log('Impacto con los pines');
});
