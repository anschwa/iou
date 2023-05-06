import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-5xl font-bold">Vite + React + Tailwind</h1>
      <div className="card">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="grid gap-4">
          <input name="" placeholder="Name" type="text" value=""/>
          <input name="" placeholder="Email" type="text" value=""/>

          <select id="" name="">
            <option value="">-</option>
            <option value="">One</option>
            <option value="">Two</option>
            <option value="">Three</option>
          </select>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >Example</button>
        </div>
      </div>
    </>
  )
}

export default App;
