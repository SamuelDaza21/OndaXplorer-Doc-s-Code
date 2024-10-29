import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Slider, Button } from '@mui/material';  // Cambia esto según la librería UI que uses

const LaboratorioOndas = () => {
  const [amplitud, setAmplitud] = useState(1);
  const [periodo, setPeriodo] = useState(1);
  const [frecuencia, setFrecuencia] = useState(1);
  const [velocidad, setVelocidad] = useState(1);
  const [tiempo, setTiempo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [datos, setDatos] = useState([]);

  const calcularOnda = useCallback(() => {
    const nuevoDatos = [];
    for (let x = 0; x <= 10; x += 0.1) {
      const y = amplitud * Math.sin((2 * Math.PI / periodo) * (x - velocidad * tiempo));
      nuevoDatos.push({ x, y });
    }
    setDatos(nuevoDatos);
  }, [amplitud, periodo, velocidad, tiempo]);

  useEffect(() => {
    calcularOnda();
  }, [calcularOnda]);

  useEffect(() => {
    let intervalo;
    if (!pausado) {
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 0.1);
      }, 50);
    }
    return () => clearInterval(intervalo);
  }, [pausado]);

  const reiniciar = () => {
    setTiempo(0);
    setPausado(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Laboratorio Interactivo de Ondas</h1>
      <div className="mb-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">Amplitud: {amplitud.toFixed(2)}</label>
          <Slider
            min={0}
            max={2}
            step={0.1}
            value={amplitud}
            onChange={(e, value) => setAmplitud(value)}
          />
        </div>
        <div>
          <label className="block mb-2">Periodo: {periodo.toFixed(2)}</label>
          <Slider
            min={0.1}
            max={5}
            step={0.1}
            value={periodo}
            onChange={(e, value) => setPeriodo(value)}
          />
        </div>
        <div>
          <label className="block mb-2">Frecuencia: {frecuencia.toFixed(2)}</label>
          <Slider
            min={0.1}
            max={5}
            step={0.1}
            value={frecuencia}
            onChange={(e, value) => setFrecuencia(value)}
          />
        </div>
        <div>
          <label className="block mb-2">Velocidad: {velocidad.toFixed(2)}</label>
          <Slider
            min={0}
            max={5}
            step={0.1}
            value={velocidad}
            onChange={(e, value) => setVelocidad(value)}
          />
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Button variant="contained" onClick={() => setPausado(!pausado)}>
          {pausado ? 'Reanudar' : 'Pausar'}
        </Button>
        <Button variant="contained" onClick={reiniciar}>Reiniciar</Button>
      </div>
    </div>
  );
};

export default LaboratorioOndas;
