import './App.css'
import {useState} from 'react'
function App() {
  const [count,setCount]=useState(0)

  const addCount=()=>{
    setCount(count+1)
  }

  const subCount=()=>{
    if(count <= 0)
    {
      setCount(0)
    }
    else 
    {
      setCount(count-1)
    }
  }

  const reset = ()=>{
    if (window.confirm("Do you want to reset the counter?"))
    {
    setCount(0)
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>{count}</h1>
        <div className='button-container'>
          <button onClick={subCount}>-</button>
          <button onClick={addCount}>+</button>
        </div>
        <button className='reset' onClick={reset}>RESET</button>
      </div>
    </div>
  );
}

export default App;
