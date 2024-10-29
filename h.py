import random
import time

class Nivel:
    def __init__(self, tiempo, pregunta, opciones, respuesta_correcta):
        self.tiempo = tiempo
        self.pregunta = pregunta
        self.opciones = opciones
        self.respuesta_correcta = respuesta_correcta

def crear_niveles():
    niveles = [
        Nivel(30, "¿Cuál es la unidad SI de masa?", ["kg", "m", "s", "A"], "kg"),
        Nivel(25, "¿Cuál es la unidad SI de longitud?", ["kg", "m", "s", "A"], "m"),
        Nivel(20, "¿Cuál es la unidad SI de tiempo?", ["kg", "m", "s", "A"], "s"),
        Nivel(20, "¿Cuál es la unidad SI de corriente eléctrica?", ["kg", "m", "s", "A"], "A"),
        Nivel(25, "¿Cuál es la unidad SI de temperatura?", ["°C", "K", "°F", "R"], "K"),
        Nivel(30, "¿Cuál es la unidad SI de cantidad de sustancia?", ["mol", "g", "L", "N"], "mol"),
        Nivel(25, "¿Cuál es la unidad SI de intensidad luminosa?", ["lux", "lm", "cd", "W"], "cd"),
        Nivel(20, "¿Cuál es la unidad SI de fuerza?", ["kg", "N", "J", "W"], "N"),
        Nivel(25, "¿Cuál es la unidad SI de presión?", ["Pa", "bar", "atm", "psi"], "Pa"),
        Nivel(30, "¿Cuál es la unidad SI de energía?", ["cal", "eV", "J", "W"], "J"),
        Nivel(25, "¿Cuál es la unidad SI de potencia?", ["hp", "J", "N", "W"], "W"),
        Nivel(20, "¿Cuál es la unidad SI de carga eléctrica?", ["A", "V", "C", "Ω"], "C"),
        Nivel(30, "¿Cuál es la unidad SI de campo magnético?", ["T", "G", "Wb", "H"], "T"),
        Nivel(25, "¿Cuál es la unidad SI de flujo luminoso?", ["lux", "lm", "cd", "W"], "lm"),
        Nivel(20, "¿Cuál es la unidad SI de frecuencia?", ["s", "Hz", "rad", "rpm"], "Hz")
    ]
    random.shuffle(niveles)
    return niveles

def jugar():
    niveles = crear_niveles()
    puntuacion = 0
    
    print("¡Bienvenido al Juego de Desactivación de Bombas con Unidades SI!")
    print("Tienes que cortar el cable correcto (elegir la respuesta correcta) para desactivar la bomba.")
    print("Cada nivel tiene una cuenta regresiva. ¡Apresúrate!")
    
    for i, nivel in enumerate(niveles, 1):
        print(f"\n--- Nivel {i} ---")
        print(f"Tiempo restante: {nivel.tiempo} segundos")
        print(f"Pregunta: {nivel.pregunta}")
        for j, opcion in enumerate(nivel.opciones, 1):
            print(f"{j}. {opcion}")
        
        tiempo_inicio = time.time()
        respuesta = input("Elige el número del cable correcto (1-4): ")
        tiempo_transcurrido = time.time() - tiempo_inicio
        
        if tiempo_transcurrido > nivel.tiempo:
            print("¡BOOM! Te has quedado sin tiempo. Juego terminado.")
            break
        
        if nivel.opciones[int(respuesta) - 1] == nivel.respuesta_correcta:
            puntuacion += 1
            print("¡Correcto! Has desactivado la bomba.")
        else:
            print(f"¡Incorrecto! La respuesta correcta era {nivel.respuesta_correcta}.")
            print("¡BOOM! La bomba ha explotado. Juego terminado.")
            break
    
    print(f"\nJuego terminado. Tu puntuación final es: {puntuacion}/{len(niveles)}")

if __name__ == "__main__":
    jugar()