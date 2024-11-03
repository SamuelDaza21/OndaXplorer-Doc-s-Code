
let currentScreen = 'main-screen';
let timer;
let score = 0;
let currentQuestion;
let totalQuestions = 0;
let questions = {
    facil: [
        {
            question: "¿Cuáles son las magnitudes fundamentales en el SI?",
            options: [
                "Longitud, masa, tiempo, temperatura, corriente eléctrica, cantidad de sustancia, intensidad luminosa.",
                "Longitud, volumen, masa, temperatura, velocidad, presión, energía.",
                "Longitud, masa, tiempo, fuerza, energía, temperatura, volumen.",
                "Longitud, masa, tiempo, volumen, intensidad luminosa, presión, cantidad de sustancia."
            ],
            correct: 0
        },
        {
            question: "¿Cuál es la unidad de medida de la longitud en el SI?",
            options: ["Metro (m)", "Kilómetro (km)", "Centímetro (cm)", "Milímetro (mm)"],
            correct: 0
        },
        {
            question: "¿Qué unidad se utiliza para medir la masa en el SI?",
            options: ["Kilogramo (kg)", "Gramo (g)", "Libra (lb)", "Onza (oz)"],
            correct: 0
        },
        {
            question: "¿Cuál es la unidad de medida de la temperatura en el SI?",
            options: ["Kelvin (K)", "Grado Celsius (°C)", "Grado Fahrenheit (°F)", "Joule (J)"],
            correct: 0
        },
        {
            question: "¿Qué magnitud se mide en amperios (A)?",
            options: ["Corriente eléctrica", "Intensidad luminosa", "Cantidad de sustancia", "Masa"],
            correct: 0
        },
        {
            question: "¿Qué magnitud se mide en luminancia?",
            options: ["Candela (cd)", "Lux (lx)", "Watt (W)", "Volt (V)"],
            correct: 0
        }
    ],
    normal: [
        {
            question: "¿Qué representa la magnitud 'masa' en el SI?",
            options: [
                "La cantidad de espacio que ocupa un objeto.",
                "La cantidad de materia en un objeto.",
                "La fuerza ejercida por un objeto en movimiento.",
                "La energía total de un objeto."
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la unidad de medida de la intensidad luminosa en el SI?",
            options: ["Lumen (lm)", "Candela (cd)", "Lux (lx)", "Watt (W)"],
            correct: 1
        },
        {
            question: "¿Cuál es la unidad de medida de la fuerza en el SI?",
            options: ["Newton (N)", "Kilogramo (kg)", "Joule (J)", "Pascal (Pa)"],
            correct: 0
        },
        {
            question: "¿Qué magnitud se mide en joules (J)?",
            options: ["Trabajo", "Energía", "Fuerza", "Potencia"],
            correct: 1
        },
        {
            question: "¿Qué magnitud se mide en pascales (Pa)?",
            options: ["Presión", "Velocidad", "Temperatura", "Área"],
            correct: 0
        },
        {
            question: "¿Qué magnitud se mide en litros (L)?",
            options: ["Volumen", "Masa", "Densidad", "Temperatura"],
            correct: 0
        }
    ],
    dificil: [
        {
            question: "¿Qué magnitud se mide en amperios (A)?",
            options: ["Corriente eléctrica", "Intensidad luminosa", "Cantidad de sustancia", "Masa"],
            correct: 0
        },
        {
            question: "¿Cuál es la unidad de medida de la intensidad luminosa en el SI?",
            options: ["Lumen (lm)", "Candela (cd)", "Lux (lx)", "Watt (W)"],
            correct: 1
        },
        {
            question: "¿Cuál es la unidad de medida de la cantidad de sustancia en el SI?",
            options: ["Mol (mol)", "Litro (L)", "Kilogramo (kg)", "Metro (m)"],
            correct: 0
        },
        {
            question: "¿Cuál es la unidad de medida de la energía en el SI?",
            options: ["Joule (J)", "Watt (W)", "Pascal (Pa)", "Newton (N)"],
            correct: 0
        },
        {
            question: "¿Qué magnitud se mide en hertzios (Hz)?",
            options: ["Frecuencia", "Longitud", "Temperatura", "Voltaje"],
            correct: 0
        },
        {
            question: "¿Qué magnitud se mide en ohmios (Ω)?",
            options: ["Resistencia", "Capacitancia", "Inductancia", "Potencia"],
            correct: 0
        }
    ]
};

function showScreen(screenId) {
    document.getElementById(currentScreen).style.display = 'none';
    document.getElementById(screenId).style.display = 'block';
    currentScreen = screenId;

    if (screenId === 'game-screen') {
        startGame();
    }
}

function startGame() {
    score = 0;
    const selectedDifficulty = document.getElementById('difficulty').value;
    totalQuestions = questions[selectedDifficulty].length; // Total de preguntas según dificultad
    // Clonar preguntas para el nuevo juego
    let questionSet = questions[selectedDifficulty];
    questions[selectedDifficulty] = JSON.parse(JSON.stringify(questionSet));
    showQuestion();
    startTimer(selectedDifficulty);
}

function showQuestion() {
    if (questions[document.getElementById('difficulty').value].length === 0) {
        gameOver();
        return;
    }

    currentQuestion = questions[document.getElementById('difficulty').value].pop(); // Sacar pregunta de la lista
    document.getElementById('question').innerText = currentQuestion.question;
    let optionsHtml = '';
    currentQuestion.options.forEach((option, index) => {
        optionsHtml += `<button onclick="checkAnswer(${index})">${option}</button>`;
    });
    document.getElementById('options').innerHTML = optionsHtml;
}

function checkAnswer(index) {
    if (index === currentQuestion.correct) {
        score++;
        showQuestion();
        resetTimer(); // Reiniciar cronómetro al responder correctamente
    } else {
        triggerExplosion(); // Llamar a la función de explosión
        setTimeout(gameOver, 500); // Esperar el tiempo de explosión antes de terminar el juego
    }
}

function triggerExplosion() {
    const explosionDiv = document.createElement('div');
    explosionDiv.className = 'explosion';
    document.body.appendChild(explosionDiv);
    setTimeout(() => {
        document.body.removeChild(explosionDiv);
    }, 500);
}

function startTimer(selectedDifficulty) {
    let time = selectedDifficulty === 'facil' ? 30 : selectedDifficulty === 'normal' ? 25 : 20;
    document.getElementById('timer').innerText = time;
    timer = setInterval(() => {
        time--;
        document.getElementById('timer').innerText = time;
        if (time <= 0) {
            gameOver();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    const selectedDifficulty = document.getElementById('difficulty').value;
    let time = selectedDifficulty === 'facil' ? 30 : selectedDifficulty === 'normal' ? 25 : 20;
    document.getElementById('timer').innerText = time;
    startTimer(selectedDifficulty);
}

function gameOver() {
    clearInterval(timer);
    document.getElementById('final-score').innerText = `Puntuación final: ${score}`;
    showScreen('game-over-screen');
}

function restartGame() {
    const selectedDifficulty = document.getElementById('difficulty').value;
    // Reiniciar preguntas y puntaje
    questions[selectedDifficulty] = JSON.parse(JSON.stringify(questions[selectedDifficulty]));
    score = 0;
    showScreen('game-screen'); // Volver a mostrar la pantalla del juego
    startGame(); // Comenzar el juego nuevamente
}

showScreen('main-screen');

//JUEGO  NEWTON
// Configuración del juego de la 1ª Ley de Newton
const config1 = {
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
        preload: preload1,
        create: create1,
        update: update1
    }
};

// Crear el juego en el contenedor específico
const game1 = new Phaser.Game(config1, document.getElementById('game-container'));
let box1;
let massSlider1;

function preload1() {
    this.load.image('box', 'path/to/box.png'); // Imagen de la caja
}

function create1() {
    this.add.text(20, 20, 'Juego de Inercia - Ajusta la Masa', { fontSize: '20px', fill: '#fff' });

    box1 = this.physics.add.sprite(400, 300, 'box').setInteractive();
    box1.setCollideWorldBounds(true);

    massSlider1 = this.add.dom(650, 50).createElement('input').setAttribute('type', 'range').setAttribute('min', '1').setAttribute('max', '10');
    massSlider1.addEventListener('input', updateMass1);
}

function update1() {
    // Aquí puedes añadir más lógica si es necesario
}

function updateMass1(event) {
    const mass = event.target.value;
    box1.body.mass = mass;
}

// Configuración del juego de la 2ª Ley de Newton
const config2 = {
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
        preload: preload2,
        create: create2,
        update: update2
    }
};

// Crear el juego en el contenedor específico
const game2 = new Phaser.Game(config2, document.getElementById('game-container2'));
let box2;
let accelerationText2, massSlider2, forceSlider2;

function preload2() {
    this.load.image('box', 'path/to/box.png'); // Imagen de la caja
}

function create2() {
    this.add.text(20, 20, 'Juego de Fuerza - Ajusta Masa y Fuerza', { fontSize: '20px', fill: '#fff' });

    box2 = this.physics.add.sprite(400, 300, 'box').setInteractive();
    box2.setCollideWorldBounds(true);

    massSlider2 = this.add.dom(650, 50).createElement('input').setAttribute('type', 'range').setAttribute('min', '1').setAttribute('max', '10');
    massSlider2.addEventListener('input', updateMass2);
    
    forceSlider2 = this.add.dom(650, 150).createElement('input').setAttribute('type', 'range').setAttribute('min', '0').setAttribute('max', '100');
    forceSlider2.addEventListener('input', applyForce);

    accelerationText2 = this.add.text(20, 550, 'Aceleración: 0', { fontSize: '20px', fill: '#fff' });
}

function update2() {
    const mass = massSlider2.value;
    const force = forceSlider2.value;
    const acceleration = force / mass;
    accelerationText2.setText('Aceleración: ' + acceleration.toFixed(2));
}

function updateMass2(event) {
    const mass = event.target.value;
    box2.body.mass = mass;
}

function applyForce(event) {
    const force = event.target.value;
    box2.setVelocity(force / box2.body.mass, 0);
}

// Configuración del juego de la 3ª Ley de Newton
const config3 = {
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
        preload: preload3,
        create: create3,
        update: update3
    }
};

// Crear el juego en el contenedor específico
const game3 = new Phaser.Game(config3, document.getElementById('game-container3'));
let projectile, surface;
let massSlider3, velocitySlider;

function preload3() {
    this.load.image('projectile', 'path/to/projectile.png'); // Imagen del proyectil
    this.load.image('surface', 'path/to/surface.png'); // Imagen de la superficie
}

function create3() {
    this.add.text(20, 20, 'Juego de Reacción - Ajusta Masa y Velocidad', { fontSize: '20px', fill: '#fff' });

    projectile = this.physics.add.sprite(100, 300, 'projectile').setInteractive();
    surface = this.physics.add.staticGroup();
    surface.create(600, 300, 'surface');

    massSlider3 = this.add.dom(650, 50).createElement('input').setAttribute('type', 'range').setAttribute('min', '1').setAttribute('max', '10');
    massSlider3.addEventListener('input', updateMass3);
    
    velocitySlider = this.add.dom(650, 150).createElement('input').setAttribute('type', 'range').setAttribute('min', '0').setAttribute('max', '100');
    velocitySlider.addEventListener('input', launchProjectile);
}

function update3() {
    // Aquí puedes añadir más lógica si es necesario
}

function updateMass3(event) {
    const mass = event.target.value;
    projectile.body.mass = mass;
}

function launchProjectile(event) {
    const velocity = event.target.value;
    projectile.setVelocity(velocity, 0);
}
