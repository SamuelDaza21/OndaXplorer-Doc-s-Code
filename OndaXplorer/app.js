const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',     // Cambia estos datos
    password: 'tu_contraseña',
    database: 'ONDAXPLORER'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Ruta para registrar usuarios
app.post('/register', (req, res) => {
    const { nombre, correo, contrasena } = req.body;

    const query = `INSERT INTO REGISTRO (Nombre, Correo, Contraseña) VALUES (?, ?, ?)`;
    db.query(query, [nombre, correo, contrasena], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al registrar usuario');
        }
        res.send('Registro exitoso');
    });
});

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
    const { correo, contrasena } = req.body;

    const query = `SELECT * FROM REGISTRO WHERE Correo = ? AND Contraseña = ?`;
    db.query(query, [correo, contrasena], (err, result) => {
        if (err) throw err;
        
        if (result.length > 0) {
            res.send('Inicio de sesión exitoso');
        } else {
            res.status(401).send('Correo o contraseña incorrectos');
        }
    });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
