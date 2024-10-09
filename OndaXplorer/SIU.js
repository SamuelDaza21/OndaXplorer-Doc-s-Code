const questions = [
    // Preguntas de selección múltiple
    {
        question: "¿Cuáles son las magnitudes fundamentales en el Sistema Internacional de Unidades (SI)?",
        options: [
            "Longitud, masa, tiempo, temperatura, corriente eléctrica, cantidad de sustancia, intensidad luminosa.",
            "Longitud, volumen, masa, temperatura, velocidad, presión, energía.",
            "Longitud, masa, tiempo, fuerza, energía, temperatura, volumen.",
            "Longitud, masa, tiempo, volumen, intensidad luminosa, presión, cantidad de sustancia."
        ],
        correct: 0,
        feedback: "Las magnitudes fundamentales en el SI son longitud, masa, tiempo, temperatura, corriente eléctrica, cantidad de sustancia e intensidad luminosa.",
        help: "Estas magnitudes son independientes y no se pueden derivar unas de otras."
    },
    {
        question: "¿Cuál es la unidad de medida de la longitud en el Sistema Internacional de Unidades (SI)?",
        options: [
            "Metro (m)",
            "Kilómetro (km)",
            "Centímetro (cm)",
            "Milímetro (mm)"
        ],
        correct: 0,
        feedback: "La unidad básica de longitud en el SI es el metro (m).",
        help: "El metro es la distancia que recorre la luz en el vacío en un intervalo de tiempo específico."
    },
    {
        question: "¿Qué representa la magnitud 'masa' en el contexto del Sistema Internacional de Unidades (SI)?",
        options: [
            "La cantidad de espacio que ocupa un objeto.",
            "La cantidad de materia en un objeto.",
            "La fuerza ejercida por un objeto en movimiento.",
            "La energía total de un objeto."
        ],
        correct: 1,
        feedback: "La masa es la cantidad de materia en un objeto, medida en kilogramos (kg).",
        help: "No debe confundirse con el peso, que es la fuerza gravitacional que actúa sobre la masa."
    },
    {
        question: "¿Cuál es la unidad de medida de la temperatura en el Sistema Internacional de Unidades (SI)?",
        options: [
            "Grado Celsius (°C)",
            "Kelvin (K)",
            "Grado Fahrenheit (°F)",
            "Joule (J)"
        ],
        correct: 1,
        feedback: "La unidad básica de temperatura en el SI es el Kelvin (K).",
        help: "El Kelvin es una escala termodinámica que comienza en el cero absoluto."
    },
    {
        question: "¿Qué magnitud fundamental se mide en amperios (A)?",
        options: [
            "Corriente eléctrica",
            "Intensidad luminosa",
            "Cantidad de sustancia",
            "Masa"
        ],
        correct: 0,
        feedback: "El amperio (A) es la unidad de medida de la corriente eléctrica.",
        help: "La corriente eléctrica es el flujo de carga eléctrica en un circuito."
    },
    {
        question: "¿Cuál es la unidad de medida de la intensidad luminosa en el Sistema Internacional de Unidades (SI)?",
        options: [
            "Lumen (lm)",
            "Candela (cd)",
            "Lux (lx)",
            "Watt (W)"
        ],
        correct: 1,
        feedback: "La unidad de medida de la intensidad luminosa en el SI es la candela (cd).",
        help: "La candela mide la cantidad de luz emitida por una fuente en una dirección específica."
    },
    {
        question: "La magnitud 'cantidad de sustancia' se mide en:",
        options: [
            "Moles (mol)",
            "Gramos (g)",
            "Kilogramos (kg)",
            "Litros (L)"
        ],
        correct: 0,
        feedback: "La cantidad de sustancia se mide en moles (mol) en el Sistema Internacional.",
        help: "Un mol es la cantidad de sustancia que contiene tantas entidades elementales como átomos hay en 12 g de carbono-12."
    },
    {
        question: "¿Qué magnitud se relaciona con la cantidad de energía en el Sistema Internacional de Unidades (SI)?",
        options: [
            "Joule (J)",
            "Newton (N)",
            "Pascal (Pa)",
            "Watts (W)"
        ],
        correct: 0,
        feedback: "La unidad de medida de la energía en el SI es el Joule (J).",
        help: "Un Joule es el trabajo realizado cuando se aplica una fuerza de un Newton a lo largo de un metro."
    },
    {
        question: "¿Cuál de las siguientes es una magnitud derivada en el Sistema Internacional de Unidades (SI)?",
        options: [
            "Masa",
            "Longitud",
            "Aceleración",
            "Temperatura"
        ],
        correct: 2,
        feedback: "La aceleración es una magnitud derivada, medida en metros por segundo al cuadrado (m/s²).",
        help: "Las magnitudes derivadas se obtienen a partir de las magnitudes fundamentales."
    },
    {
        question: "¿Qué unidad se utiliza para medir la presión en el Sistema Internacional de Unidades (SI)?",
        options: [
            "Pascal (Pa)",
            "Bar (bar)",
            "Atmosfera (atm)",
            "Newton por metro cuadrado (N/m²)"
        ],
        correct: 0,
        feedback: "La unidad de medida de la presión en el SI es el Pascal (Pa).",
        help: "Un Pascal es equivalente a un Newton por metro cuadrado."
    },

    // Preguntas de ejercicios
    {
        question: "Si un objeto tiene una masa de 5 kg y se encuentra en un campo gravitacional donde g = 9.81 m/s², ¿cuál es su peso?",
        options: ["49.05 N", "5 N", "9.81 N", "50 N"],
        correct: 0,
        feedback: "El peso se calcula como W = mg = 5 kg * 9.81 m/s² = 49.05 N.",
        help: "El peso es la fuerza de gravedad que actúa sobre un objeto."
    },
    {
        question: "Un objeto se mueve a una velocidad de 10 m/s y tiene una masa de 2 kg. ¿Cuál es su energía cinética?",
        options: ["10 J", "20 J", "100 J", "50 J"],
        correct: 1,
        feedback: "La energía cinética se calcula como E_k = 1/2 mv² = 1/2 * 2 kg * (10 m/s)² = 100 J.",
        help: "La energía cinética depende de la masa y la velocidad del objeto."
    },
    {
        question: "Si tienes 3 moles de un gas, ¿cuántas partículas hay en total? (Usa el número de Avogadro, NA ≈ 6.022 x 10²³)",
        options: ["1.81 x 10²³", "6.022 x 10²³", "1.81 x 10²⁴", "1.00 x 10²³"],
        correct: 2,
        feedback: "La cantidad total de partículas es N = n * NA = 3 moles * 6.022 x 10²³ partículas/mol = 1.81 x 10²⁴ partículas.",
        help: "El número de Avogadro permite convertir moles a partículas."
    },
    {
        question: "¿Cuál es la presión ejercida por una fuerza de 100 N sobre un área de 2 m²?",
        options: ["50 Pa", "200 Pa", "100 Pa", "400 Pa"],
        correct: 0,
        feedback: "La presión se calcula como P = F/A = 100 N / 2 m² = 50 Pa.",
        help: "La presión es la fuerza dividida por el área sobre la cual se ejerce."
    },
    {
        question: "Un cuerpo tiene una longitud de 200 cm. ¿Cuál es su longitud en metros?",
        options: ["2 m", "0.2 m", "20 m", "0.02 m"],
        correct: 0,
        feedback: "200 cm equivalen a 2 m (1 m = 100 cm).",
        help: "Para convertir de centímetros a metros, divide por 100."
    },
    {
        question: "Si un líquido ocupa un volumen de 2500 mL, ¿cuál es su volumen en litros?",
        options: ["2.5 L", "0.25 L", "25 L", "250 L"],
        correct: 0,
        feedback: "2500 mL equivalen a 2.5 L (1 L = 1000 mL).",
        help: "Para convertir de mililitros a litros, divide por 1000."
    },
    {
        question: "¿Cuánto es 1 kg de fuerza en Newtons?",
        options: ["9.81 N", "1 N", "10 N", "100 N"],
        correct: 0,
        feedback: "1 kg de fuerza es equivalente a 9.81 N en la Tierra.",
        help: "La fuerza se calcula como el peso, que es la masa por la gravedad (W = mg)."
    },
    {
        question: "Si un objeto tiene una masa de 10 kg y se acelera a 2 m/s², ¿cuál es la fuerza aplicada?",
        options: ["20 N", "10 N", "5 N", "30 N"],
        correct: 0,
        feedback: "La fuerza se calcula como F = ma = 10 kg * 2 m/s² = 20 N.",
        help: "Utiliza la segunda ley de Newton para calcular la fuerza."
    }
];

// Inicializar variables
let currentQuestionIndex = 0;
let score = 0;

// Función para mezclar preguntas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para iniciar el cuestionario
function startQuiz() {
    shuffleArray(questions);
    showQuestion();
}

// Función para mostrar la pregunta actual
function showQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ""; // Limpiar contenido anterior
    const currentQuestion = questions[currentQuestionIndex];
    
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.textContent = currentQuestion.question;
    quizContainer.appendChild(questionElement);
    
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    quizContainer.appendChild(optionsContainer);
    
    // Mostrar la ayuda correspondiente
    const helpBox = document.getElementById("help");
    helpBox.innerHTML = `<strong>Ayuda:</strong> ${currentQuestion.help}`;
}

// Función para seleccionar respuesta
function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackContainer = document.getElementById("result");
    const scoreContainer = document.getElementById("score");

    // Obtener todos los botones de opciones
    const buttons = document.querySelectorAll(".options button");

    // Deshabilitar todos los botones
    buttons.forEach((button, index) => {
        button.disabled = true; // Deshabilitar todas las opciones

        // Marcar la opción seleccionada y la correcta
        if (index === selectedIndex) {
            button.classList.add("selected"); // Marcar la opción seleccionada
            if (index === currentQuestion.correct) {
                button.classList.add("correct"); // Opción correcta
            } else {
                button.classList.add("incorrect"); // Opción incorrecta
            }
        } else if (index === currentQuestion.correct) {
            button.classList.add("correct"); // Marcar la opción correcta
        }
    });

    if (selectedIndex === currentQuestion.correct) {
        feedbackContainer.innerHTML = `<span class="correct">Correcto!</span> ${currentQuestion.feedback}`;
        score += 1; // Sumar puntos si es correcto
    } else {
        feedbackContainer.innerHTML = `<span class="incorrect">Incorrecto.</span> ${currentQuestion.feedback}`;
    }

    scoreContainer.innerHTML = `Puntaje: ${score}`;
    document.getElementById("next").style.display = "block"; // Mostrar botón "Siguiente"
}


// Función para ir a la siguiente pregunta
document.getElementById("next").onclick = function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById("result").innerHTML = ""; // Limpiar resultado
        document.getElementById("next").style.display = "none"; // Ocultar botón "Siguiente"
    } else {
        document.getElementById("quiz").innerHTML = "<h2>¡Cuestionario terminado!</h2>";
        document.getElementById("next").style.display = "none"; // Ocultar botón "Siguiente"
    }
};

// Iniciar el cuestionario
startQuiz();
