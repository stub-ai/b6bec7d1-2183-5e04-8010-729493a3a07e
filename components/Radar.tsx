import React from 'react';

interface RadarProps {
  signals: Array<{x: number, y: number}>;
}

const Radar: React.FC<RadarProps> = ({ signals }) => {
  return (
    <div>
      {/* Aquí puedes renderizar tu radar y las señales */}
    </div>
  );
};

export default Radar;