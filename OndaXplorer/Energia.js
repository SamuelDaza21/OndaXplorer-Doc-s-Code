// script.js
const questions = [
    // Preguntas de selección múltiple
    {
        question: "¿Cuál es la unidad de medida de la energía en el Sistema Internacional?",
        options: ["Vatios", "Julios", "Calorías", "Newtons"],
        correct: 1,
        feedback: "La unidad de medida de la energía en el Sistema Internacional es el Julio (J).",
        help: "1 Julio es igual a 1 Vatios por segundo."
    },
    {
        question: "¿Qué tipo de energía posee un objeto debido a su movimiento?",
        options: ["Energía potencial", "Energía cinética", "Energía térmica", "Energía eléctrica"],
        correct: 1,
        feedback: "La energía cinética es la energía que posee un objeto debido a su movimiento.",
        help: "Energía cinética (E_k) = 1/2 mv^2"
    },
    {
        question: "¿Qué ley física establece que la energía no se crea ni se destruye, solo se transforma?",
        options: ["Ley de Newton", "Ley de Ohm", "Ley de conservación de la energía", "Ley de Hooke"],
        correct: 2,
        feedback: "La ley de conservación de la energía establece que la energía no se crea ni se destruye, solo se transforma.",
        help: "Conservación de energía: E_total = E_inicial."
    },
    {
        question: "¿Cuál es la forma de energía asociada con la posición de un objeto?",
        options: ["Energía térmica", "Energía cinética", "Energía potencial", "Energía química"],
        correct: 2,
        feedback: "La energía potencial es la energía asociada con la posición de un objeto.",
        help: "Energía potencial (E_p) = mgh."
    },
    {
        question: "¿Qué es la energía térmica?",
        options: ["Energía del movimiento", "Energía almacenada", "Energía de las moléculas en movimiento", "Energía química"],
        correct: 2,
        feedback: "La energía térmica es la energía asociada con el movimiento de las moléculas.",
        help: "Energía térmica está relacionada con la temperatura de un sistema."
    },
    {
        question: "¿Cuál es la fórmula para calcular la energía cinética?",
        options: ["E = mc^2", "E_k = 1/2 mv^2", "E_p = mgh", "E = Fd"],
        correct: 1,
        feedback: "La fórmula para calcular la energía cinética es E_k = 1/2 mv^2.",
        help: "m = masa, v = velocidad."
    },
    {
        question: "¿Qué tipo de energía se obtiene de los combustibles fósiles?",
        options: ["Energía nuclear", "Energía térmica", "Energía solar", "Energía eléctrica"],
        correct: 1,
        feedback: "Los combustibles fósiles liberan energía térmica cuando se queman.",
        help: "La energía térmica se puede transformar en energía eléctrica."
    },
    {
        question: "¿Cuál es la energía almacenada en los enlaces químicos de una sustancia?",
        options: ["Energía cinética", "Energía potencial", "Energía química", "Energía eléctrica"],
        correct: 2,
        feedback: "La energía química es la energía almacenada en los enlaces químicos de una sustancia.",
        help: "Reacciones químicas pueden liberar o absorber energía química."
    },
    {
        question: "¿Qué tipo de energía es la energía solar?",
        options: ["Energía cinética", "Energía potencial", "Energía térmica", "Energía radiante"],
        correct: 3,
        feedback: "La energía solar es un tipo de energía radiante que proviene del sol.",
        help: "La energía solar puede ser convertida en energía térmica o eléctrica."
    },
    {
        question: "¿Cuál es el principio de conservación de la energía?",
        options: ["La energía total se conserva", "La energía se puede crear", "La energía se puede destruir", "La energía es infinita"],
        correct: 0,
        feedback: "El principio de conservación de la energía establece que la energía total se conserva en un sistema cerrado.",
        help: "E_total = E_entrada - E_salida."
    },
    {
        question: "¿Qué es la energía nuclear?",
        options: ["Energía liberada en reacciones químicas", "Energía en el movimiento de objetos", "Energía liberada en reacciones nucleares", "Energía de los enlaces químicos"],
        correct: 2,
        feedback: "La energía nuclear es la energía liberada en reacciones nucleares, como la fisión o la fusión.",
        help: "La fisión nuclear libera grandes cantidades de energía."
    },
    {
        question: "¿Qué tipo de energía se transforma en energía eléctrica en una planta hidroeléctrica?",
        options: ["Energía térmica", "Energía cinética", "Energía potencial", "Energía solar"],
        correct: 2,
        feedback: "En una planta hidroeléctrica, la energía potencial del agua se transforma en energía eléctrica.",
        help: "E_p = mgh; la altura del agua es clave para la energía potencial."
    },
    {
        question: "¿Qué es la energía eólica?",
        options: ["Energía del sol", "Energía del agua", "Energía del viento", "Energía de los combustibles fósiles"],
        correct: 2,
        feedback: "La energía eólica es la energía obtenida del movimiento del viento.",
        help: "Los aerogeneradores convierten la energía del viento en energía eléctrica."
    },
    {
        question: "¿Qué representa la energía potencial gravitatoria?",
        options: ["La energía de movimiento", "La energía de posición en un campo gravitacional", "La energía almacenada", "La energía térmica"],
        correct: 1,
        feedback: "La energía potencial gravitatoria representa la energía de posición en un campo gravitacional.",
        help: "Energía potencial (E_p) = mgh."
    },
    {
        question: "¿Cuál es la energía que puede ser almacenada y liberada en una batería?",
        options: ["Energía eléctrica", "Energía química", "Energía térmica", "Energía nuclear"],
        correct: 1,
        feedback: "La energía química puede ser almacenada y liberada en una batería.",
        help: "Las reacciones químicas en las baterías producen energía eléctrica."
    },
    
    // Preguntas de ejercicios
    {
        question: "Un objeto de 5 kg se mueve a 10 m/s. ¿Cuál es su energía cinética?",
        options: ["250 J", "500 J", "100 J", "200 J"],
        correct: 1,
        feedback: "La energía cinética es E_k = 1/2 mv^2 = 1/2 * 5 * (10^2) = 250 J.",
        help: "Fórmula: E_k = 1/2 mv^2."
    },
    {
        question: "Calcule la energía potencial de un objeto de 10 kg a una altura de 5 m. (g = 9.81 m/s²)",
        options: ["490.5 J", "500 J", "100 J", "250 J"],
        correct: 0,
        feedback: "La energía potencial es E_p = mgh = 10 * 9.81 * 5 = 490.5 J.",
        help: "Fórmula: E_p = mgh."
    },
    {
        question: "¿Cuál es la energía total en un sistema donde la energía cinética es 300 J y la energía potencial es 200 J?",
        options: ["100 J", "500 J", "300 J", "200 J"],
        correct: 1,
        feedback: "La energía total es E_total = E_cinetica + E_potencial = 300 J + 200 J = 500 J.",
        help: "E_total = E_k + E_p."
    },
    {
        question: "Un resorte tiene una constante de 200 N/m y está comprimido 0.5 m. ¿Cuál es su energía potencial elástica?",
        options: ["25 J", "50 J", "75 J", "100 J"],
        correct: 1,
        feedback: "La energía potencial elástica es E_p = 1/2 kx² = 1/2 * 200 * (0.5^2) = 25 J.",
        help: "Fórmula: E_p = 1/2 kx²."
    },
    {
        question: "¿Cuánta energía se requiere para elevar un objeto de 15 kg a 10 m? (g = 9.81 m/s²)",
        options: ["147 J", "1470 J", "981 J", "1500 J"],
        correct: 1,
        feedback: "La energía requerida es E = mgh = 15 * 9.81 * 10 = 1471.5 J.",
        help: "Fórmula: E = mgh."
    },
    {
        question: "Un carro de 1000 kg se mueve a 20 m/s. ¿Cuál es su energía cinética?",
        options: ["200 J", "400 J", "2000 J", "200000 J"],
        correct: 3,
        feedback: "Energía cinética E_k = 1/2 mv^2 = 1/2 * 1000 * (20^2) = 200000 J.",
        help: "Fórmula: E_k = 1/2 mv^2."
    },
    {
        question: "Si un objeto tiene 600 J de energía potencial y cae 5 m, ¿cuánta energía cinética tendrá al llegar al suelo? (ignorar la resistencia del aire)",
        options: ["600 J", "500 J", "1000 J", "400 J"],
        correct: 0,
        feedback: "Energía cinética al llegar al suelo es igual a la energía potencial perdida: 600 J.",
        help: "E_k = E_p (suponiendo conservación de energía)."
    },
    {
        question: "Un objeto de 2 kg se deja caer desde una altura de 10 m. ¿Cuál es su energía potencial inicial?",
        options: ["20 J", "10 J", "15 J", "200 J"],
        correct: 3,
        feedback: "E_p = mgh = 2 * 9.81 * 10 = 196.2 J.",
        help: "Fórmula: E_p = mgh."
    },
    {
        question: "Si un globo de 3 kg sube a una altura de 8 m, ¿cuánta energía potencial adquiere?",
        options: ["236.4 J", "250 J", "300 J", "350 J"],
        correct: 0,
        feedback: "E_p = mgh = 3 * 9.81 * 8 = 235.44 J.",
        help: "Fórmula: E_p = mgh."
    },
    {
        question: "Un péndulo tiene una energía total de 50 J en el punto más alto. ¿Cuál es su energía cinética en el punto más bajo?",
        options: ["0 J", "50 J", "25 J", "75 J"],
        correct: 1,
        feedback: "En el punto más bajo, toda la energía es cinética: E_k = 50 J.",
        help: "Conservación de la energía en un péndulo."
    },
    {
        question: "Si un objeto de 10 kg cae desde 20 m de altura, ¿cuál es su energía potencial en el punto más alto? (g = 9.81 m/s²)",
        options: ["980 J", "1962 J", "500 J", "1000 J"],
        correct: 1,
        feedback: "E_p = mgh = 10 * 9.81 * 20 = 1962 J.",
        help: "Fórmula: E_p = mgh."
    },
    {
        question: "Si un automóvil tiene una energía cinética de 400 J y su masa es de 50 kg, ¿cuál es su velocidad?",
        options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
        correct: 1,
        feedback: "E_k = 1/2 mv^2; despejando v: v = sqrt(2E_k/m) = sqrt(2*400/50) = 10 m/s.",
        help: "Fórmula: E_k = 1/2 mv^2."
    },
    {
        question: "Un objeto de 12 kg cae desde 15 m de altura. ¿Cuál es su energía potencial inicial?",
        options: ["150 J", "180 J", "1200 J", "1000 J"],
        correct: 2,
        feedback: "E_p = mgh = 12 * 9.81 * 15 = 1764 J.",
        help: "Fórmula: E_p = mgh."
    },
    {
        question: "Si un objeto tiene una energía total de 100 J, y su energía cinética es 40 J, ¿cuánta energía potencial tiene?",
        options: ["60 J", "40 J", "100 J", "80 J"],
        correct: 0,
        feedback: "E_p = E_total - E_k = 100 J - 40 J = 60 J.",
        help: "E_total = E_k + E_p."
    },
    {
        question: "Calcule la energía cinética de un objeto de 8 kg que se mueve a 12 m/s.",
        options: ["115 J", "384 J", "96 J", "144 J"],
        correct: 1,
        feedback: "E_k = 1/2 mv^2 = 1/2 * 8 * (12^2) = 576 J.",
        help: "Fórmula: E_k = 1/2 mv^2."
    },
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
