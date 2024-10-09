// script.js
const questions = [
    // Preguntas de selección múltiple
    {
        question: "¿Cuál es la primera ley de Newton?",
        options: [
            "La fuerza es igual a la masa por la aceleración.",
            "Para cada acción hay una reacción igual y opuesta.",
            "Todo objeto en reposo permanecerá en reposo, y todo objeto en movimiento continuará en movimiento a menos que una fuerza externa actúe sobre él.",
            "La energía no se crea ni se destruye."
        ],
        correct: 2,
        feedback: "La primera ley de Newton establece que todo objeto en reposo permanecerá en reposo y todo objeto en movimiento continuará en movimiento a menos que una fuerza externa actúe sobre él.",
        help: "Esta ley también se conoce como el principio de inercia."
    },
    {
        question: "¿Cuál es la fórmula de la segunda ley de Newton?",
        options: [
            "F = ma",
            "E = mc^2",
            "v = at",
            "p = mv"
        ],
        correct: 0,
        feedback: "La segunda ley de Newton se expresa como F = ma, donde F es la fuerza, m es la masa y a es la aceleración.",
        help: "Esta fórmula indica que la fuerza aplicada a un objeto es igual a la masa de ese objeto multiplicada por su aceleración."
    },
    {
        question: "¿Qué establece la tercera ley de Newton?",
        options: [
            "La fuerza es igual a la masa por la aceleración.",
            "La energía total de un sistema es constante.",
            "Para cada acción hay una reacción igual y opuesta.",
            "Todo cuerpo en movimiento tiende a permanecer en movimiento."
        ],
        correct: 2,
        feedback: "La tercera ley de Newton establece que para cada acción hay una reacción igual y opuesta.",
        help: "Esto significa que si un objeto A ejerce una fuerza sobre un objeto B, el objeto B ejerce una fuerza de igual magnitud pero en dirección opuesta sobre el objeto A."
    },
    {
        question: "Si un coche de 1000 kg acelera a 2 m/s², ¿cuál es la fuerza que actúa sobre él?",
        options: ["500 N", "1000 N", "2000 N", "4000 N"],
        correct: 2,
        feedback: "La fuerza se calcula como F = ma = 1000 kg * 2 m/s² = 2000 N.",
        help: "Fuerza = masa * aceleración."
    },
    {
        question: "¿Qué se entiende por inercia?",
        options: [
            "La resistencia de un objeto a cambiar su estado de movimiento.",
            "La cantidad de energía que posee un objeto.",
            "La fuerza de gravedad que actúa sobre un objeto.",
            "La velocidad máxima que puede alcanzar un objeto."
        ],
        correct: 0,
        feedback: "La inercia es la propiedad de los objetos de resistir cambios en su estado de movimiento.",
        help: "Un objeto en reposo permanecerá en reposo a menos que se aplique una fuerza externa."
    },
    {
        question: "¿Cómo se relacionan la masa y la aceleración en la segunda ley de Newton?",
        options: [
            "La masa es directamente proporcional a la aceleración.",
            "La masa es inversamente proporcional a la aceleración.",
            "La aceleración es igual a la masa multiplicada por la fuerza.",
            "La fuerza es igual a la masa dividida por la aceleración."
        ],
        correct: 1,
        feedback: "La masa es inversamente proporcional a la aceleración cuando se aplica una fuerza constante.",
        help: "Si aumentas la masa, la aceleración disminuye para una fuerza dada."
    },
    {
        question: "Si dos fuerzas de 5 N actúan en direcciones opuestas sobre un objeto, ¿cuál es la fuerza neta?",
        options: ["0 N", "5 N", "10 N", "2.5 N"],
        correct: 0,
        feedback: "Las fuerzas se cancelan, por lo que la fuerza neta es 0 N.",
        help: "Cuando las fuerzas son iguales y opuestas, se anulan entre sí."
    },
    {
        question: "¿Qué ocurre con un objeto en movimiento cuando deja de actuar la fuerza sobre él?",
        options: [
            "El objeto se detiene inmediatamente.",
            "El objeto sigue moviéndose a la misma velocidad.",
            "El objeto cambia de dirección.",
            "El objeto acelera."
        ],
        correct: 1,
        feedback: "De acuerdo con la primera ley de Newton, un objeto en movimiento continuará en movimiento a la misma velocidad a menos que una fuerza externa actúe sobre él.",
        help: "Esto se conoce como inercia."
    },
    {
        question: "¿Qué describe la relación entre fuerza, masa y aceleración?",
        options: [
            "La ley de conservación de la energía.",
            "La ley de gravitación universal.",
            "La segunda ley de Newton.",
            "La ley de acción y reacción."
        ],
        correct: 2,
        feedback: "La segunda ley de Newton describe cómo la fuerza, la masa y la aceleración están relacionadas.",
        help: "La fórmula es F = ma."
    },
    {
        question: "Si un objeto está en equilibrio, ¿cuál es la suma de las fuerzas que actúan sobre él?",
        options: [
            "Mayor que cero.",
            "Menor que cero.",
            "Igual a cero.",
            "Depende de la masa del objeto."
        ],
        correct: 2,
        feedback: "Si un objeto está en equilibrio, la suma de las fuerzas que actúan sobre él es igual a cero.",
        help: "Esto significa que no hay aceleración."
    },

    // Preguntas de ejercicios
    {
        question: "Un objeto de 10 kg está en reposo. ¿Qué fuerza se necesita para darle una aceleración de 3 m/s²?",
        options: ["10 N", "30 N", "3 N", "0 N"],
        correct: 1,
        feedback: "La fuerza necesaria se calcula como F = ma = 10 kg * 3 m/s² = 30 N.",
        help: "F = masa * aceleración."
    },
    {
        question: "Un coche de 1500 kg frena y reduce su velocidad de 20 m/s a 0 m/s en 5 segundos. ¿Cuál es la fuerza de fricción?",
        options: ["3000 N", "6000 N", "1500 N", "750 N"],
        correct: 1,
        feedback: "La aceleración es -4 m/s², por lo que la fuerza de fricción es F = ma = 1500 kg * -4 m/s² = -6000 N.",
        help: "La fuerza es negativa porque actúa en dirección opuesta al movimiento."
    },
    {
        question: "¿Cuánto es la fuerza neta si un objeto de 5 kg tiene dos fuerzas de 10 N y -5 N actuando sobre él?",
        options: ["15 N", "5 N", "10 N", "25 N"],
        correct: 1,
        feedback: "La fuerza neta es 10 N - 5 N = 5 N.",
        help: "La fuerza neta se calcula sumando las fuerzas, considerando sus direcciones."
    },
    {
        question: "Un objeto de 2 kg es empujado con una fuerza de 10 N. ¿Cuál es su aceleración?",
        options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        correct: 1,
        feedback: "La aceleración se calcula como a = F/m = 10 N / 2 kg = 5 m/s².",
        help: "Aceleración es fuerza dividida por masa."
    },
    {
        question: "¿Cuál es la fuerza que actúa sobre un objeto de 8 kg en caída libre? (g = 9.81 m/s²)",
        options: ["78.48 N", "9.81 N", "80 N", "15 N"],
        correct: 0,
        feedback: "La fuerza es F = mg = 8 kg * 9.81 m/s² = 78.48 N.",
        help: "La fuerza de gravedad actúa sobre todos los objetos."
    },
    {
        question: "Si un objeto de 10 kg se mueve a una velocidad de 15 m/s, ¿cuál es su energía cinética?",
        options: ["1125 J", "750 J", "1500 J", "3000 J"],
        correct: 0,
        feedback: "La energía cinética se calcula como E_k = 1/2 mv² = 1/2 * 10 kg * (15 m/s)² = 1125 J.",
        help: "E_k = 1/2 * masa * velocidad al cuadrado."
    },
    {
        question: "Un tren de 3000 kg está en reposo y recibe una fuerza de 6000 N. ¿Cuál es su aceleración?",
        options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
        correct: 1,
        feedback: "La aceleración se calcula como a = F/m = 6000 N / 3000 kg = 2 m/s².",
        help: "Utiliza la segunda ley de Newton para calcular la aceleración."
    },
    {
        question: "Si dos objetos de 1 kg se mueven a 1 m/s, ¿cuál es el momento total del sistema?",
        options: ["0 kg*m/s", "1 kg*m/s", "2 kg*m/s", "1/2 kg*m/s"],
        correct: 2,
        feedback: "El momento se calcula como p = mv, por lo que p_total = 1 kg * 1 m/s + 1 kg * 1 m/s = 2 kg*m/s.",
        help: "El momento total es la suma de los momentos individuales."
    },
    {
        question: "Un cohete de 50 kg empuja hacia abajo con una fuerza de 500 N. ¿Cuál es su aceleración?",
        options: ["0 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        correct: 2,
        feedback: "La aceleración se calcula como a = F/m = 500 N / 50 kg = 10 m/s².",
        help: "Aplica la segunda ley de Newton."
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
