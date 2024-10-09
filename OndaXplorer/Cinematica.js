const questions = [
    // Preguntas de selección múltiple
    {
        question: "¿Qué es la cinemática?",
        options: [
            "El estudio de las fuerzas que actúan sobre los cuerpos.",
            "El estudio del movimiento de los cuerpos sin considerar las causas.",
            "El estudio de las interacciones entre cuerpos.",
            "El estudio de la energía y el trabajo."
        ],
        correct: 1,
        feedback: "La cinemática es el estudio del movimiento de los cuerpos sin considerar las fuerzas que lo causan.",
        help: "Se centra en describir cómo se mueven los objetos."
    },
    {
        question: "¿Qué magnitud física describe la rapidez de un objeto en movimiento?",
        options: [
            "Aceleración",
            "Velocidad",
            "Desplazamiento",
            "Fuerza"
        ],
        correct: 1,
        feedback: "La velocidad es la magnitud que describe la rapidez y la dirección del movimiento de un objeto.",
        help: "La velocidad se define como el cambio de posición por unidad de tiempo."
    },
    {
        question: "Si un objeto se mueve en línea recta con velocidad constante, ¿cuál es su aceleración?",
        options: [
            "Mayor que cero",
            "Igual a cero",
            "Menor que cero",
            "Variable"
        ],
        correct: 1,
        feedback: "La aceleración es igual a cero si la velocidad es constante.",
        help: "La aceleración se define como el cambio de velocidad por unidad de tiempo."
    },
    {
        question: "¿Qué tipo de movimiento describe un objeto que se desplaza hacia adelante y luego se detiene?",
        options: [
            "Movimiento rectilíneo uniforme",
            "Movimiento rectilíneo uniformemente acelerado",
            "Movimiento circular",
            "Movimiento oscilatorio"
        ],
        correct: 1,
        feedback: "Este movimiento se describe como movimiento rectilíneo uniformemente acelerado si hay un cambio en la velocidad.",
        help: "Puede involucrar aceleración y desaceleración."
    },
    {
        question: "La fórmula \( v = v_0 + at \) se utiliza para calcular:",
        options: [
            "El desplazamiento",
            "La velocidad final",
            "La aceleración",
            "El tiempo"
        ],
        correct: 1,
        feedback: "Esta fórmula se utiliza para calcular la velocidad final de un objeto en movimiento rectilíneo uniformemente acelerado.",
        help: "Donde \( v_0 \) es la velocidad inicial, \( a \) es la aceleración y \( t \) es el tiempo."
    },
    {
        question: "¿Cómo se define el desplazamiento?",
        options: [
            "La distancia recorrida por un objeto en un intervalo de tiempo.",
            "La distancia más corta entre el punto inicial y el punto final.",
            "El cambio en la velocidad de un objeto.",
            "El tiempo que tarda un objeto en moverse."
        ],
        correct: 1,
        feedback: "El desplazamiento es la distancia más corta entre el punto inicial y el punto final, teniendo en cuenta la dirección.",
        help: "Es una magnitud vectorial."
    },
    {
        question: "¿Qué indica una gráfica de posición vs. tiempo con una pendiente positiva constante?",
        options: [
            "El objeto está en reposo.",
            "El objeto se mueve con velocidad constante.",
            "El objeto acelera.",
            "El objeto se mueve hacia atrás."
        ],
        correct: 1,
        feedback: "Una pendiente positiva constante indica que el objeto se mueve con velocidad constante.",
        help: "La pendiente representa la velocidad en este tipo de gráfica."
    },
    {
        question: "La aceleración es positiva cuando:",
        options: [
            "La velocidad del objeto disminuye.",
            "La velocidad del objeto aumenta.",
            "El objeto está en reposo.",
            "El objeto se mueve en dirección opuesta."
        ],
        correct: 1,
        feedback: "La aceleración es positiva cuando la velocidad del objeto está aumentando.",
        help: "Si un objeto está desacelerando, su aceleración es negativa."
    },
    {
        question: "¿Cuál es la unidad de medida de la aceleración en el Sistema Internacional de Unidades (SI)?",
        options: [
            "m/s",
            "m/s²",
            "km/h",
            "m²/s"
        ],
        correct: 1,
        feedback: "La unidad de medida de la aceleración es metros por segundo al cuadrado (m/s²).",
        help: "Se define como el cambio de velocidad por unidad de tiempo."
    },
    {
        question: "En un movimiento rectilíneo uniformemente acelerado, la distancia recorrida se puede calcular con la fórmula:",
        options: [
            "d = v*t",
            "d = v_0*t + 1/2 at²",
            "d = v^2 / 2a",
            "d = a*t²"
        ],
        correct: 1,
        feedback: "La fórmula correcta es d = v_0*t + 1/2 at², donde \( d \) es la distancia, \( v_0 \) es la velocidad inicial, \( a \) es la aceleración y \( t \) es el tiempo.",
        help: "Esta fórmula describe la distancia recorrida bajo aceleración constante."
    },

    // Preguntas de ejercicios
    {
        question: "Un coche parte del reposo y acelera uniformemente a 2 m/s². ¿Qué velocidad alcanzará después de 5 segundos?",
        options: ["10 m/s", "5 m/s", "15 m/s", "2 m/s"],
        correct: 0,
        feedback: "Usando la fórmula v = v_0 + at: v = 0 + (2 m/s²)(5 s) = 10 m/s.",
        help: "La velocidad final se calcula a partir de la aceleración y el tiempo."
    },
    {
        question: "Un ciclista viaja a una velocidad constante de 15 m/s durante 10 segundos. ¿Cuál es la distancia recorrida?",
        options: ["150 m", "15 m", "1.5 m", "100 m"],
        correct: 0,
        feedback: "La distancia se calcula como d = v * t = 15 m/s * 10 s = 150 m.",
        help: "En movimiento uniforme, la distancia es la velocidad multiplicada por el tiempo."
    },
    {
        question: "Un objeto se mueve en línea recta con una velocidad de 20 m/s. Si reduce su velocidad a 10 m/s en 5 segundos, ¿cuál es su aceleración?",
        options: ["-2 m/s²", "-4 m/s²", "2 m/s²", "4 m/s²"],
        correct: 0,
        feedback: "La aceleración se calcula como a = (v - v_0) / t = (10 m/s - 20 m/s) / 5 s = -2 m/s².",
        help: "La aceleración es negativa porque el objeto está desacelerando."
    },
    {
        question: "Si un objeto se mueve a 30 m/s y frena con una aceleración de -3 m/s², ¿cuánto tiempo tardará en detenerse?",
        options: ["10 s", "15 s", "5 s", "20 s"],
        correct: 0,
        feedback: "El tiempo se calcula como t = (v - v_0) / a = (0 m/s - 30 m/s) / (-3 m/s²) = 10 s.",
        help: "El objeto se detendrá cuando su velocidad sea cero."
    },
    {
        question: "Un automóvil se desplaza 100 m en 4 segundos. ¿Cuál es su velocidad promedio?",
        options: ["25 m/s", "20 m/s", "30 m/s", "10 m/s"],
        correct: 1,
        feedback: "La velocidad promedio se calcula como v = d / t = 100 m / 4 s = 25 m/s.",
        help: "La velocidad promedio es la distancia total recorrida dividida por el tiempo total."
    },
    {
        question: "Un objeto cae desde una altura de 80 m. Si despreciamos la resistencia del aire, ¿cuánto tiempo tardará en llegar al suelo? (Usa g = 9.81 m/s²)",
        options: ["4 s", "5 s", "8 s", "9 s"],
        correct: 0,
        feedback: "Usando la fórmula d = 1/2 g t²: 80 m = 1/2 * 9.81 m/s² * t². Resolviendo, t ≈ 4 s.",
        help: "Se utiliza la ecuación del movimiento uniformemente acelerado."
    },
    {
        question: "¿Cuánto recorrerá un coche que viaja a 60 km/h durante 2 horas?",
        options: ["120 km", "60 km", "100 km", "150 km"],
        correct: 0,
        feedback: "La distancia es d = v * t = 60 km/h * 2 h = 120 km.",
        help: "Convierte la velocidad a la misma unidad que el tiempo."
    },
    {
        question: "Un objeto se mueve hacia la derecha a 5 m/s y luego se mueve hacia la izquierda a 3 m/s. ¿Cuál es su velocidad media en un intervalo de tiempo si se mueve 10 segundos en total?",
        options: ["1 m/s", "2 m/s", "3 m/s", "4 m/s"],
        correct: 0,
        feedback: "La velocidad media es el desplazamiento total dividido por el tiempo. Desplazamiento: 5 m/s * 10 s - 3 m/s * 10 s = 20 m.",
        help: "La velocidad media considera tanto la dirección como la magnitud."
    },
    {
        question: "Un corredor realiza una vuelta de 400 m en 50 segundos. ¿Cuál es su velocidad promedio?",
        options: ["6 m/s", "8 m/s", "10 m/s", "12 m/s"],
        correct: 1,
        feedback: "La velocidad promedio se calcula como v = d / t = 400 m / 50 s = 8 m/s.",
        help: "La velocidad promedio es la distancia total dividida por el tiempo total."
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
