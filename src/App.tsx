import React from 'react';

import { PointType } from './components/Map/types';

import { Sidebar, Map } from './components';
import './styles/App.scss';

function App() {
  const [selectedPoint, setSelectedPoint] = React.useState<PointType | null>(null);

  const handleClearPoint = () => {
    setSelectedPoint(null);
  };

  const handleSelectPoint = (point: PointType) => {
    setSelectedPoint(point);
  };

  return (
    <div className="app">
      <Sidebar selectedPoint={selectedPoint} handleClose={handleClearPoint} />
      <Map handleSelectPoint={handleSelectPoint} />
    </div>
  );
}

export default App;
