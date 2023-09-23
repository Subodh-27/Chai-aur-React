import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {

  const [length, setLength] = useState(8);
  const [numberCB, setNumberCB] = useState(false);
  const [characterCB, setCharacterCB] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberCB) str += '0123456789';
    if (characterCB) str += '!@#$%^&*_+{}[]~';

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberCB, characterCB, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberCB, characterCB, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password, length]);

  return (
    <>
      <div className='w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-700 rounded-lg shadow-md'>
        <h1 className='my-3 text-center text-white'>Password Generator</h1>

        <div className='flex mb-4 overflow-hidden rounded-lg shadow'>
          <input
            type="text"
            value={password}
            className='w-full px-3 py-1 outline-none'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='px-3 text-white bg-blue-700 outline-none py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >
            Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberCB}
              id='numberInput'
              onChange={() => {
                setNumberCB((previousValue) => !previousValue);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={characterCB}
              id='characterInput'
              onChange={() => {
                setCharacterCB((previousValue) => !previousValue);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
