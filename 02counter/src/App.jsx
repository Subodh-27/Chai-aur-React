import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 10) {
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  const reduceValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >
        Increase Value
      </button>
      <br />

      <button
        onClick={reduceValue}
      >
        Decrease Value
      </button>
    </>
  );
}

export default App;
