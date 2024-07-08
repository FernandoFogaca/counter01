import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [counter, setCount] = useState<number>(0);
  console.log("~ App ~ counter:", counter);

  const handleDecrement = () => {
    setCount(counter - 1);
    console.log("Click on the button <");
  };

  const handleIncrement = () => {
    setCount(counter + 1);
    console.log("Click on the button >");
  };

  const handleReset = () => {
    setCount(0);
    const result = window.confirm("Are you sure you want to reset the counter?");
     if (result) {
      setCount(0);
    }
   };

  return (
    <div className='container'>
      <h1>C O U N T E R </h1>

      <h2 className='count'>{counter}</h2>
      <div className='btn-container'>
      <Button onClick={handleDecrement}>{"<"}Counter</Button> 

      <Button onClick={handleReset}>Reset</Button>

      <Button onClick={handleIncrement}>Counter{">"}</Button>
      </div>
    </div>
  );
}

export default App;