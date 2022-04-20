import './App.css';
import { useState } from 'react'

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ isDisabled, setIsDisabled ] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  function handleCheckbox (){
    !isDisabled ? setIsDisabled(true) : setIsDisabled(false)
  }
  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor) }
        disabled={isDisabled}
      >
        Change to {newButtonColor} 
      </button> 
      <input 
        type="checkbox" 
        onClick={handleCheckbox}
        id="enable-button-checkbox"
        defaultChecked={isDisabled}
        aria-checked={isDisabled}
      />
    </div>
  );
}

export default App;
