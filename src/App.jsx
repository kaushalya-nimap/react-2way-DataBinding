import React, { useState } from 'react'
//Two-way binding in React refers to the process where the state of a component and the value of an input field are synchronized in both directions. This means that when the state changes, the input field’s value updates to reflect the new state, and vice versa
function App() {
  const [inputValue,setInputValue]=useState('')
  const[displayValue,setDisplayValue]=useState('')

  const handleButton=()=>{
    setDisplayValue(inputValue)
    setInputValue('')
  }
  return (
    <div>
      <h1>2 Way data binding</h1>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
      <p>{inputValue}</p>
      <button onClick={handleButton} >Capture Text</button>
      <p>{displayValue}</p>
    </div>
    
  )
}

export default App