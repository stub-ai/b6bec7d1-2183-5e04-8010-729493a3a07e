import React, { useState } from 'react';

interface CoordinateFormProps {
  onSend: (x: number, y: number) => void;
}

const CoordinateForm: React.FC<CoordinateFormProps> = ({ onSend }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(x, y);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={x} onChange={e => setX(Number(e.target.value))} />
      <input type="number" value={y} onChange={e => setY(Number(e.target.value))} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CoordinateForm;