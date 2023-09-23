import './App.css';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('olive');

  return (
    <div
      className='w-full duration-200 h-96'
      style={{ backgroundColor: color }}
    >
      <div className='fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12'>
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-xl">
          <button
            onClick={() => setColor('red')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('gray')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'gray' }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor('purple')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor('pink')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'pink' }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor('lavender')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'lavender' }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor('papayawhip')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'papayawhip' }}
          >
            Papaya Whip
          </button>
          <button
            onClick={() => setColor('goldenrod')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'goldenrod' }}
          >
            Gold
          </button>
          <button
            onClick={() => setColor('whitesmoke')}
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
            style={{ backgroundColor: 'whitesmoke' }}
          >
            White
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
