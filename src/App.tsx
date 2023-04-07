import React from 'react';
import PieChart from "./UI/PieChart/PieChart";

function App() {
  const items = [
    {
      label: 'y',
      value: 200,
    },
    {
      label: 'f',
      value: 100,
    },
    {
      label: 'l',
      value: 30,
    },
    {
      label: 'tujh',
      value: 1000,
    },
    {
      label: 'wefwefw',
      value: 500,
    }
  ]
  return (
    <div>
      <PieChart items={items}/>
    </div>
  );
}

export default App;
