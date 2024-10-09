const questions = [
    // Preguntas de selección múltiple
    {
        question: "¿Qué es una onda?",
        options: [
            "Una perturbación que se desplaza en el tiempo y el espacio.",
            "Un movimiento de traslación de un objeto.",
            "Un cambio de temperatura en un medio.",
            "Una fuerza aplicada a un objeto."
        ],
        correct: 0,
        feedback: "Una onda es una perturbación que se desplaza a través de un medio o el vacío, transportando energía sin transportar materia.",
        help: "Las ondas pueden ser mecánicas o electromagnéticas."
    },
    {
        question: "¿Cuál es la diferencia principal entre ondas mecánicas y ondas electromagnéticas?",
        options: [
            "Las ondas mecánicas requieren un medio para propagarse; las electromagnéticas no.",
            "Las ondas electromagnéticas son más rápidas.",
            "Las ondas mecánicas viajan a través del vacío.",
            "No hay diferencia entre ambas."
        ],
        correct: 0,
        feedback: "Las ondas mecánicas requieren un medio para propagarse, mientras que las ondas electromagnéticas pueden viajar en el vacío.",
        help: "Ejemplos de ondas mecánicas son las ondas sonoras; las electromagnéticas incluyen la luz."
    },
    {
        question: "¿Qué es la frecuencia de una onda?",
        options: [
            "El número de oscilaciones por unidad de tiempo.",
            "La distancia entre dos crestas sucesivas.",
            "La altura máxima de la onda.",
            "La velocidad de propagación de la onda."
        ],
        correct: 0,
        feedback: "La frecuencia es el número de ciclos u oscilaciones que ocurren en un segundo, y se mide en Hertz (Hz).",
        help: "La frecuencia está inversamente relacionada con el período."
    },
    {
        question: "¿Cuál de las siguientes opciones es un ejemplo de una onda transversal?",
        options: [
            "Onda sonora",
            "Onda en una cuerda",
            "Onda de choque",
            "Onda sísmica P"
        ],
        correct: 1,
        feedback: "Las ondas transversales son aquellas en las que la oscilación es perpendicular a la dirección de propagación, como en una onda en una cuerda.",
        help: "Las ondas sonoras son longitudinales."
    },
    {
        question: "La longitud de onda es:",
        options: [
            "La distancia entre dos puntos en fase en la onda.",
            "El tiempo que tarda una onda en pasar por un punto.",
            "La altura máxima de la onda.",
            "La energía transportada por la onda."
        ],
        correct: 0,
        feedback: "La longitud de onda es la distancia entre dos puntos sucesivos en fase, como de cresta a cresta o de valle a valle.",
        help: "Se suele denotar con la letra griega lambda (λ)."
    },
    {
        question: "La velocidad de una onda se puede calcular con la fórmula:",
        options: [
            "v = f * λ",
            "v = f / λ",
            "v = λ / f",
            "v = f + λ"
        ],
        correct: 0,
        feedback: "La velocidad de una onda es igual a la frecuencia multiplicada por la longitud de onda: v = f * λ.",
        help: "La velocidad es constante en un medio dado para una onda particular."
    },
    {
        question: "¿Qué fenómeno se produce cuando dos ondas se superponen?",
        options: [
            "Reflexión",
            "Refracción",
            "Interferencia",
            "Difracción"
        ],
        correct: 2,
        feedback: "La interferencia ocurre cuando dos o más ondas se superponen, resultando en una onda nueva.",
        help: "Puede ser constructiva o destructiva, dependiendo de la fase de las ondas."
    },
    {
        question: "La resonancia es:",
        options: [
            "La propagación de ondas en un medio.",
            "El aumento de la amplitud de una onda cuando coincide con la frecuencia natural de un sistema.",
            "La reflexión de ondas en un límite.",
            "La separación de ondas en diferentes direcciones."
        ],
        correct: 1,
        feedback: "La resonancia ocurre cuando una onda de frecuencia específica provoca una oscilación máxima en un sistema.",
        help: "Ejemplos incluyen un columpio o un puente que vibra a su frecuencia natural."
    },
    {
        question: "En una onda longitudinal, las partículas del medio se mueven:",
        options: [
            "Perpendicularmente a la dirección de propagación de la onda.",
            "En la misma dirección que la propagación de la onda.",
            "Sin ningún movimiento.",
            "Círculando alrededor de un punto fijo."
        ],
        correct: 1,
        feedback: "En una onda longitudinal, las partículas del medio oscilan en la misma dirección que la propagación de la onda.",
        help: "Un ejemplo de onda longitudinal es el sonido."
    },
    {
        question: "¿Qué tipo de onda es la luz?",
        options: [
            "Onda mecánica",
            "Onda longitudinal",
            "Onda transversal",
            "Onda estacionaria"
        ],
        correct: 2,
        feedback: "La luz es una onda electromagnética y, como tal, es una onda transversal.",
        help: "Se propaga en el vacío y no necesita un medio material."
    },

    // Preguntas de ejercicios
    {
        question: "Una onda sonora viaja a 340 m/s y tiene una frecuencia de 680 Hz. ¿Cuál es su longitud de onda?",
        options: ["0.5 m", "1 m", "2 m", "0.25 m"],
        correct: 0,
        feedback: "Usando la fórmula λ = v / f: λ = 340 m/s / 680 Hz = 0.5 m.",
        help: "La longitud de onda se puede calcular fácilmente usando la velocidad y la frecuencia."
    },
    {
        question: "Si una onda tiene una longitud de onda de 2 m y viaja a una velocidad de 10 m/s, ¿cuál es su frecuencia?",
        options: ["5 Hz", "10 Hz", "2.5 Hz", "20 Hz"],
        correct: 0,
        feedback: "Usando la fórmula f = v / λ: f = 10 m/s / 2 m = 5 Hz.",
        help: "La frecuencia está inversamente relacionada con la longitud de onda."
    },
    {
        question: "Una cuerda fija en ambos extremos vibra con una frecuencia de 120 Hz y tiene una longitud de onda de 0.5 m. ¿Cuál es la velocidad de la onda en la cuerda?",
        options: ["60 m/s", "120 m/s", "240 m/s", "30 m/s"],
        correct: 2,
        feedback: "La velocidad de la onda se calcula con v = f * λ: v = 120 Hz * 0.5 m = 60 m/s.",
        help: "La velocidad se obtiene multiplicando la frecuencia por la longitud de onda."
    },
    {
        question: "Un sistema oscilante tiene una frecuencia natural de 10 Hz. ¿Qué sucederá si se le aplica una frecuencia de 10 Hz desde una onda externa?",
        options: [
            "No ocurrirá nada.",
            "Se producirá interferencia destructiva.",
            "Se producirá resonancia.",
            "Se detendrá el sistema."
        ],
        correct: 2,
        feedback: "Se producirá resonancia, aumentando la amplitud de oscilación del sistema.",
        help: "La resonancia ocurre cuando la frecuencia externa coincide con la frecuencia natural."
    },
    {
        question: "Una onda tiene una frecuencia de 2 Hz y una longitud de onda de 3 m. ¿Cuánto tiempo tardará en pasar un punto fijo?",
        options: ["0.5 s", "1 s", "2 s", "3 s"],
        correct: 1,
        feedback: "El periodo T es el inverso de la frecuencia: T = 1/f = 1/2 Hz = 0.5 s.",
        help: "El tiempo es el periodo de una oscilación completa."
    },
    {
        question: "¿Qué tipo de interferencia se produce cuando dos ondas de igual amplitud y frecuencia se encuentran en fase?",
        options: [
            "Interferencia destructiva",
            "Interferencia constructiva",
            "Difracción",
            "Reflexión"
        ],
        correct: 1,
        feedback: "Se produce interferencia constructiva, resultando en una onda con mayor amplitud.",
        help: "Ambas ondas suman sus amplitudes."
    },
    {
        question: "Si una onda tiene una frecuencia de 100 Hz y una longitud de onda de 2 m, ¿cuál es su velocidad?",
        options: ["50 m/s", "100 m/s", "200 m/s", "300 m/s"],
        correct: 1,
        feedback: "Usando v = f * λ: v = 100 Hz * 2 m = 200 m/s.",
        help: "La velocidad es el producto de la frecuencia y la longitud de onda."
    },
    {
        question: "Si una cuerda tiene un modo de vibración con una longitud de onda de 1 m y está fija en ambos extremos, ¿cuántos nodos habrá en el primer armónico?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        feedback: "En el primer armónico hay 2 nodos, uno en cada extremo.",
        help: "Cada modo de vibración tiene un número específico de nodos."
    },
    {
        question: "En un fenómeno de difracción, ¿qué sucede con una onda al pasar por una rendija estrecha?",
        options: [
            "La onda se refleja.",
            "La onda se divide en varias partes.",
            "La onda se propaga en línea recta.",
            "La onda se detiene."
        ],
        correct: 1,
        feedback: "La onda se difracta, es decir, se expande al pasar por la rendija estrecha.",
        help: "La difracción es más pronunciada cuando la longitud de onda es comparable al tamaño de la abertura."
    },
    {
        question: "Un sonido tiene una frecuencia de 440 Hz. ¿Cuál es su longitud de onda en el aire, si la velocidad del sonido es 340 m/s?",
        options: ["0.77 m", "0.5 m", "0.68 m", "0.76 m"],
        correct: 0,
        feedback: "Usando λ = v / f: λ = 340 m/s / 440 Hz = 0.772 m (aproximadamente 0.77 m).",
        help: "La longitud de onda se puede calcular con la velocidad y la frecuencia."
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
