const questions = [
    // Preguntas teóricas
    {
        question: "¿Qué es la reflexión de la luz?",
        options: [
            "El cambio de dirección de la luz al entrar en un nuevo medio.",
            "El cambio de dirección de la luz al chocar con una superficie.",
            "La absorción de la luz por un material.",
            "La dispersión de la luz en diferentes direcciones."
        ],
        correct: 1,
        feedback: "La reflexión es el cambio de dirección que experimenta la luz al chocar con una superficie.",
        help: "Este fenómeno sigue la Ley de Reflexión."
    },
    {
        question: "¿Cuál es la Ley de Reflexión?",
        options: [
            "El ángulo de incidencia es igual al ángulo de refracción.",
            "El ángulo de incidencia es igual al ángulo de reflexión.",
            "El ángulo de incidencia es mayor que el ángulo de reflexión.",
            "La luz siempre se refleja a 90 grados."
        ],
        correct: 1,
        feedback: "La Ley de Reflexión establece que el ángulo de incidencia es igual al ángulo de reflexión.",
        help: "Se mide con respecto a la normal a la superficie."
    },
    {
        question: "¿Qué es la refracción de la luz?",
        options: [
            "El cambio de dirección de la luz al cambiar de medio.",
            "La absorción de la luz por un material.",
            "La reflexión de la luz en una superficie plana.",
            "La dispersión de la luz en diferentes colores."
        ],
        correct: 0,
        feedback: "La refracción es el cambio de dirección que experimenta la luz al pasar de un medio a otro.",
        help: "La luz se desacelera o acelera al cambiar de medio."
    },
    {
        question: "¿Qué determina el índice de refracción de un medio?",
        options: [
            "La velocidad de la luz en el vacío.",
            "La cantidad de luz reflejada.",
            "La longitud de onda de la luz.",
            "La temperatura del medio."
        ],
        correct: 0,
        feedback: "El índice de refracción de un medio se define como la relación entre la velocidad de la luz en el vacío y la velocidad de la luz en el medio.",
        help: "Se representa como n = c/v, donde c es la velocidad de la luz en el vacío."
    },
    {
        question: "Si la luz pasa de un medio menos denso a uno más denso, ¿qué sucede con su velocidad y dirección?",
        options: [
            "Aumenta y se aleja de la normal.",
            "Disminuye y se acerca a la normal.",
            "Aumenta y se acerca a la normal.",
            "Disminuye y se aleja de la normal."
        ],
        correct: 1,
        feedback: "La luz disminuye su velocidad y se acerca a la normal al pasar a un medio más denso.",
        help: "Este fenómeno se observa en la refracción."
    },
    {
        question: "¿Qué tipo de espejo es curvo y refleja la luz hacia un foco?",
        options: [
            "Espejo plano",
            "Espejo cóncavo",
            "Espejo convexo",
            "Espejo difuso"
        ],
        correct: 1,
        feedback: "El espejo cóncavo refleja la luz hacia un foco, concentrando los rayos de luz.",
        help: "Se utiliza en aplicaciones como reflectores y telescopios."
    },
    {
        question: "¿Qué es la imagen virtual en un espejo convexo?",
        options: [
            "Una imagen que se forma en el mismo lado que el objeto.",
            "Una imagen que se puede proyectar en una pantalla.",
            "Una imagen que se forma en el lado opuesto al objeto.",
            "Una imagen que no se puede ver."
        ],
        correct: 0,
        feedback: "La imagen virtual en un espejo convexo se forma del mismo lado que el objeto y no puede ser proyectada.",
        help: "Las imágenes virtuales son siempre más pequeñas que el objeto real."
    },
    {
        question: "En la refracción, ¿qué ocurre con la luz cuando entra en un medio menos denso?",
        options: [
            "Se desacelera y se aleja de la normal.",
            "Se acelera y se aleja de la normal.",
            "Se desacelera y se acerca a la normal.",
            "No ocurre ningún cambio."
        ],
        correct: 1,
        feedback: "La luz se acelera y se aleja de la normal al entrar en un medio menos denso.",
        help: "Este fenómeno se observa en la transición de agua a aire."
    },
    {
        question: "¿Qué es el foco en el contexto de los espejos cóncavos?",
        options: [
            "El punto donde la luz se dispersa.",
            "El punto donde se cruzan los rayos reflejados.",
            "El punto donde se encuentran los rayos incidentes.",
            "El punto donde se produce la imagen virtual."
        ],
        correct: 1,
        feedback: "El foco es el punto donde se cruzan los rayos reflejados en un espejo cóncavo.",
        help: "Es fundamental para el diseño óptico de instrumentos."
    },
    {
        question: "La cantidad de luz reflejada en una superficie depende de:",
        options: [
            "El color de la luz.",
            "La rugosidad de la superficie.",
            "La temperatura del medio.",
            "La longitud de onda de la luz."
        ],
        correct: 1,
        feedback: "La cantidad de luz reflejada depende de la rugosidad y características de la superficie.",
        help: "Superficies más lisas reflejan más luz."
    },

    // Ejercicios prácticos
    {
        question: "Un rayo de luz incide sobre un espejo plano con un ángulo de incidencia de 30 grados. ¿Cuál es el ángulo de reflexión?",
        options: ["15 grados", "30 grados", "45 grados", "60 grados"],
        correct: 1,
        feedback: "Según la Ley de Reflexión, el ángulo de reflexión es igual al ángulo de incidencia: 30 grados.",
        help: "Recuerda que ambos ángulos se miden respecto a la normal."
    },
    {
        question: "La luz pasa del aire (n = 1) al agua (n = 1.33). Si el ángulo de incidencia es de 45 grados, ¿cuál es el ángulo de refracción?",
        options: ["32 grados", "38 grados", "45 grados", "60 grados"],
        correct: 1,
        feedback: "Usando la ley de Snell: n1 * sin(θ1) = n2 * sin(θ2). Calculando se obtiene θ2 ≈ 32 grados.",
        help: "Asegúrate de aplicar correctamente la ley de Snell."
    },
    {
        question: "Un espejo cóncavo tiene un radio de curvatura de 40 cm. ¿Cuál es la distancia focal?",
        options: ["10 cm", "20 cm", "30 cm", "40 cm"],
        correct: 1,
        feedback: "La distancia focal (f) de un espejo cóncavo es la mitad del radio de curvatura: f = R/2 = 40 cm / 2 = 20 cm.",
        help: "Recuerda que la distancia focal es positiva para espejos cóncavos."
    },
    {
        question: "Un objeto se encuentra a 30 cm de un espejo convexo con una distancia focal de -15 cm. ¿A qué distancia se formará la imagen?",
        options: ["10 cm", "15 cm", "20 cm", "25 cm"],
        correct: 3,
        feedback: "Usando la fórmula del espejo: 1/f = 1/do + 1/di, obtenemos di = 10 cm (virtual).",
        help: "Recuerda que la imagen en espejos convexos es virtual y se forma detrás del espejo."
    },
    {
        question: "Un rayo de luz viaja en un medio con un índice de refracción de 1.5 y llega a un medio con un índice de 1.2. Si el ángulo de incidencia es de 30 grados, ¿cuál será el ángulo de refracción?",
        options: ["22 grados", "32 grados", "42 grados", "52 grados"],
        correct: 1,
        feedback: "Usando la ley de Snell: n1 * sin(θ1) = n2 * sin(θ2), el ángulo de refracción es de aproximadamente 22 grados.",
        help: "No olvides utilizar las funciones trigonométricas para encontrar el resultado."
    },
    {
        question: "Un espejo convexo produce una imagen de un objeto a 5 cm detrás del espejo. Si el objeto está a 10 cm del espejo, ¿cuál es la magnificación de la imagen?",
        options: ["0.5", "1", "2", "0.25"],
        correct: 0,
        feedback: "La magnificación (M) se calcula como M = -di/do = -5 cm/10 cm = -0.5. La imagen es virtual y menor.",
        help: "Recuerda que la magnificación negativa indica que la imagen es virtual."
    },
    {
        question: "Un rayo de luz pasa del agua (n = 1.33) al aire (n = 1). Si el ángulo de incidencia es de 60 grados, ¿cuál es el ángulo de refracción?",
        options: ["38.7 grados", "45 grados", "53.1 grados", "60 grados"],
        correct: 2,
        feedback: "Usando la ley de Snell, se obtiene θ2 ≈ 38.7 grados al pasar de un medio más denso a uno menos denso.",
        help: "Asegúrate de aplicar la ley de Snell correctamente para encontrar el resultado."
    },
    {
        question: "Un espejo cóncavo forma una imagen real a 20 cm del espejo. Si el objeto está a 30 cm del espejo, ¿cuál es la magnificación?",
        options: ["0.67", "1.5", "2", "3"],
        correct: 1,
        feedback: "La magnificación se calcula como M = -di/do = -20 cm/30 cm = -0.67. La imagen es real y menor.",
        help: "Recuerda que la magnificación también indica el tamaño relativo de la imagen respecto al objeto."
    },
    {
        question: "Un rayo de luz entra a un prisma con un ángulo de incidencia de 45 grados. Si el índice de refracción del prisma es 1.5, ¿cuál es el ángulo de desviación del rayo?",
        options: ["30 grados", "45 grados", "60 grados", "75 grados"],
        correct: 1,
        feedback: "El ángulo de desviación se puede calcular utilizando la ley de Snell y la geometría del prisma.",
        help: "Recuerda que el ángulo de desviación depende del ángulo de incidencia y del índice de refracción."
    },
    {
        question: "Un rayo de luz incide en un espejo cóncavo con un ángulo de 30 grados. ¿Qué ángulo de reflexión se producirá?",
        options: ["15 grados", "30 grados", "45 grados", "60 grados"],
        correct: 1,
        feedback: "Siguiendo la Ley de Reflexión, el ángulo de reflexión es igual al ángulo de incidencia: 30 grados.",
        help: "Ambos ángulos se miden respecto a la normal al espejo."
    },
    {
        question: "Un objeto se coloca a 12 cm de un espejo cóncavo. Si la distancia focal del espejo es de 4 cm, ¿dónde se formará la imagen?",
        options: ["1.5 cm", "3 cm", "6 cm", "12 cm"],
        correct: 3,
        feedback: "Aplicando la fórmula del espejo: 1/f = 1/do + 1/di, se obtiene di = 12 cm.",
        help: "Recuerda que la imagen será real y se forma en el lado opuesto al objeto."
    },
    {
        question: "Un rayo de luz viaja en un medio con un índice de refracción de 2. Si el ángulo de incidencia es de 60 grados, ¿cuál es el ángulo de refracción al entrar en el vacío?",
        options: ["30 grados", "45 grados", "60 grados", "90 grados"],
        correct: 1,
        feedback: "Usando la ley de Snell: n1 * sin(θ1) = n2 * sin(θ2), se obtiene θ2 = 30 grados al entrar en el vacío.",
        help: "Asegúrate de realizar correctamente los cálculos con la ley de Snell."
    },
    {
        question: "¿Qué ocurre con un rayo de luz cuando pasa de un medio denso a uno menos denso?",
        options: [
            "Se refleja completamente.",
            "Se refracta y se aleja de la normal.",
            "Se refracta y se acerca a la normal.",
            "No ocurre ningún cambio."
        ],
        correct: 1,
        feedback: "Cuando la luz pasa de un medio denso a uno menos denso, se refracta y se aleja de la normal.",
        help: "Este es un principio importante en el estudio de la óptica."
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
