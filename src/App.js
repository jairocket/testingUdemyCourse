import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  function handleCheckbox() {
    if (!isDisabled) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }
  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        onClick={handleCheckbox}
        id="disable-button-checkbox"
        defaultChecked={isDisabled}
        aria-checked={isDisabled}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
