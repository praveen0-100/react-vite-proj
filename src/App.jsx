import React from 'react'
import ToDo from './components/ToDo'
import './App.css'
const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'>
      <ToDo/>
    </div>
  );
}

export default App