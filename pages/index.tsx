import React, { useState, useEffect } from 'react';
import Radar from '../components/Radar';
import CoordinateForm from '../components/CoordinateForm';

const Home: React.FC = () => {
  const [signals, setSignals] = useState([]);

  const handleSend = (x: number, y: number) => {
    // Aquí puedes hacer una llamada a tu API para obtener las señales para las coordenadas dadas
    // y luego actualizar el estado de las señales.
  };

  return (
    <div>
      <CoordinateForm onSend={handleSend} />
      <Radar signals={signals} />
    </div>
  );
};

export default Home;