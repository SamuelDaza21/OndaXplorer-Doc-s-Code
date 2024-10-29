new p5((p) => {
    let objetoPosX = 200;  // Posición del objeto
    let focoConcavo = 175; // Foco para el espejo cóncavo
    let centroConcavo = 350; // Centro de curvatura para el espejo cóncavo
    let focoConvexo = 50; // Foco para el espejo convexo
    let centroConvexo = 150; // Centro de curvatura para el espejo convexo
    let modo = 'concavo';  // Por defecto iniciamos en cóncavo
    

    p.setup = () => {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('espejosCanvas');
        p.noLoop();
        

        document.getElementById('btnConcavo').addEventListener('click', () => setModo('concavo'));
        document.getElementById('btnConvexo').addEventListener('click', () => setModo('convexo'));   
        document.getElementById('setPosBtn').addEventListener('click', setPosicionManual);
        document.getElementById('resetEspejos').addEventListener('click', resetCanvas);
    };

    p.draw = () => {
        for (let i = 0; i < p.height; i++) {
            if (i < p.height / 2) {
                // Primera mitad (abajo) - Azul claro
                p.stroke(100,196 , 236); // Color azul claro
            } else {
                // Segunda mitad (arriba) - Verde claro
                p.stroke(144, 238, 144); // Color verde claro
            }
            p.line(0, i, p.width, i); // Dibujar línea horizontal
        }
        
        
        
        

        // Eje óptico
        p.stroke(0);
        p.line(0, p.height / 2, p.width, p.height / 2);

        if (modo === 'concavo') {
            dibujarEspejoConcavo();
        } else if (modo === 'convexo') {
            dibujarEspejoConvexo();
        }

        // Dibujar el objeto
        p.stroke(0);
        p.fill(0);
        p.line(objetoPosX, p.height / 2, objetoPosX, p.height / 2 - 50); // Objeto (flecha)
        p.triangle(objetoPosX - 5, p.height / 2 - 50, objetoPosX + 5, p.height / 2 - 50, objetoPosX, p.height / 2 - 60); // Punta del objeto

        p.textSize(20); // Tamaño del texto
        p.fill(0); // Color del texto
        if (modo === 'concavo') {
            p.text('Espejo Cóncavo', 10, 30); // Mostrar texto "Espejo Cóncavo"
        } else if (modo === 'convexo') {
            p.text('Espejo Convexo', 10, 30); // Mostrar texto "Espejo Convexo"
        }
    };

    function dibujarEspejoConcavo() {
        // Dibujar espejo cóncavo
        p.stroke(0, 0, 255);
        p.noFill();
        p.arc(265, p.height / 2, 200, 200, 3 * p.PI / 2, p.PI / 2);

        // Rayo 1: paralelo al eje óptico y reflejado hacia el foco
        p.stroke(255, 0, 0); // Rojo para el rayo incidente
        p.line(objetoPosX, p.height / 2 - 50, 350, p.height / 2 - 50); // Rayo paralelo
        p.stroke(0, 0, 255); // Azul para el rayo reflejado
        p.line(350, p.height / 2 - 50, focoConcavo, p.height / 2); // Reflejado al foco

        // Rayo 2: hacia el foco y reflejado paralelo
        p.stroke(255, 0, 0);
        p.line(objetoPosX, p.height / 2 - 50, focoConcavo, p.height / 2); // Hacia el foco
        p.stroke(0, 0, 255);
        p.line(focoConcavo, p.height / 2, 350, p.height / 2 - 50); // Reflejado paralelo

        // Rayo 3: pasa por el centro de curvatura
        p.stroke(255, 0, 0);
        p.line(objetoPosX, p.height / 2 - 50, centroConcavo, p.height / 2 - 50); // Pasa por el centro

        // Imagen formada
        let imagenX = 400 - objetoPosX; // Invertida
        let imagenHeight = -(p.map(objetoPosX, 50, 350, 50, 100)); // Proporcional
        p.stroke(0);
        p.line(imagenX, p.height / 2, imagenX, p.height / 2 - imagenHeight);
        p.triangle(imagenX - 5, p.height / 2 - imagenHeight, imagenX + 5, p.height / 2 - imagenHeight, imagenX, p.height / 2 - imagenHeight - 10);
    }

    function dibujarEspejoConvexo() {
        // Dibujar espejo convexo
        p.stroke(0, 0, 255);
        p.noFill();
        p.arc(63, p.height / 2, 200, 200,3 * p.PI / 2, p.PI / 2); // Convexo

        // Rayo 1: paralelo al eje óptico y reflejado como si viniera del foco
        p.stroke(255, 0, 0); // Rojo para el rayo incidente
        p.line(objetoPosX, p.height / 2 - 50, 150, p.height / 2 - 50); // Rayo paralelo al eje hasta el espejo
        p.stroke(0, 0, 255); // Azul para el rayo reflejado
        p.line(150, p.height / 2 - 50, focoConvexo, p.height / 2); // Reflejado como si viniera del foco

        // Rayo 2: dirigido hacia el foco y reflejado paralelo
        p.stroke(255, 0, 0); // Rojo para el rayo incidente
        p.line(objetoPosX, p.height / 2 - 50, focoConvexo, p.height / 2); // Rayo dirigido hacia el foco virtual
        p.stroke(0, 0, 255); // Azul para el rayo reflejado
        p.line(150, p.height / 2 - 50, 350, p.height / 2 - 50); // Reflejado paralelo al eje óptico

        // Rayo 3: dirigido hacia el centro de curvatura y reflejado
        p.stroke(255, 0, 0); // Rojo para el rayo incidente
        p.line(objetoPosX, p.height / 2 - 50, centroConvexo, p.height / 2); // Rayo hacia el centro virtual
        p.stroke(0, 0, 255); // Azul para el rayo reflejado
        p.line(150, p.height / 2, centroConvexo, p.height / 2 - 50); // Reflejado en dirección al centro virtual

        // Imagen formada (virtual y más pequeña detrás del espejo)
        let imagenX = 150 - (150 - objetoPosX) / 2; // La imagen se forma detrás del espejo
        let imagenHeight = p.map(objetoPosX, 50, 350, 25, 50); // La imagen es más pequeña
        p.stroke(0);
        p.line(imagenX, p.height / 2, imagenX, p.height / 2 - imagenHeight); // Línea de la imagen
        p.triangle(imagenX - 5, p.height / 2 - imagenHeight, imagenX + 5, p.height / 2 - imagenHeight, imagenX, p.height / 2 - imagenHeight - 10); // Punta de la imagen
    }

    function setModo(nuevoModo) {
        modo = nuevoModo;
        resetCanvas();
    }

    function setPosicionManual() {
        let inputPos = document.getElementById('inputPos').value;
        let inputFoco = document.getElementById('inputFoco').value;
        let inputCentro = document.getElementById('inputCentro').value;
        let aviso = document.getElementById('aviso'); // Creamos o seleccionamos un div para el aviso
        if (inputPos < 50 || inputPos > 350) {
            aviso.innerText = 'El valor debe estar entre 50 y 350';
            aviso.style.display = 'block'; // Mostrar el aviso
            return; // Salir de la función sin cambiar la posición
        } else if (inputFoco < 50 || inputFoco > 175) {
            aviso.innerText = 'El valor debe estar entre 50 y 175 para la posición del foco.';
            aviso.style.display = 'block';
            return;
        } else if (inputCentro < 100 || inputCentro > 350) {
            aviso.innerText = 'El valor debe estar entre 100 y 350 para la posición del centro de curvatura.';
            aviso.style.display = 'block';
            return;
        } else {
            aviso.style.display = 'none';
            objetoPosX = Math.max(50, Math.min(350, parseInt(inputPos)));
            focoConcavo = Math.max(50, Math.min(350, parseInt(inputFoco)));
            centroConcavo = Math.max(50, Math.min(350, parseInt(inputCentro)));
            p.redraw();
        }
    }
    

    function resetCanvas() {
        objetoPosX = 200; // Reiniciar la posición del objeto
        focoConcavo = 300; // Reiniciar la posición del foco cóncavo
        centroConcavo = 350; // Reiniciar la posición del centro de curvatura cóncavo

        document.getElementById('inputPos').value = 200; // Reiniciar el input de posición
        document.getElementById('inputFoco').value = 175;
        document.getElementById('inputCentro').value = 350;
        p.redraw();
    }
    function actualizarCentroDesdeFoco() {
        let inputFoco = document.getElementById('inputFoco').value;
    let inputCentro = document.getElementById('inputCentro');

    if (inputFoco < 50) inputFoco = 50;
    if (inputFoco > 175) inputFoco = 175; // Limitamos el foco a un valor máximo de 175
    inputCentro.value = Math.max(2 * inputFoco, 100); // Actualizamos el centro para que sea al menos el doble del foco y al menos 100
}
    
    function actualizarFocoDesdeCentro() {
        let inputCentro = document.getElementById('inputCentro').value;
    let inputFoco = document.getElementById('inputFoco');

    if (inputCentro < 100) inputCentro = 100;
    if (inputCentro > 350) inputCentro = 350; // Limitamos el centro de curvatura a un valor máximo de 350
    inputFoco.value = Math.min(inputCentro / 2, 175); // Actualizamos el foco para que sea la mitad del centro de curvatura como máximo
}
    
});
