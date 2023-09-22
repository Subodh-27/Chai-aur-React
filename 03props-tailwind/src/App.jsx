import './App.css';
import Card from './components/Card';

function App() {

  /* let myObj = {
    userName: 'John',
    age: 31
  };

  let newArr = [1, 2, 3, 4]; */

  return (
    <>
      <h1 className='bg-red-800 text-slate-100 rounded-xl mb-4'>
        Tailwind Test
      </h1>

      <Card userName='Chai Aur React' btnText='Click Me' />
      <Card userName='Chai Aur JavaScript' />

    </>
  );
}

export default App;
