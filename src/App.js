import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {

      let str = e.target.value.replace(/\D/g, "");
      if (str.length === 0) {
          setInputValue(" ")
      }
      else if (str.length <= 3 ) {
          setInputValue("(" + str)
      } else if (str.length <= 6) {
          setInputValue("(" + str.slice(0, 3) + ")" + str.slice(3, 6))
      } else if (str.length <= 10) {
          setInputValue("(" + str.slice(0, 3) + ")" + str.slice(3, 6) + "-" + str.slice(6, 10))
      }

  };
  return (
      <>
          <input onChange={handleChange} type="text" value={inputValue} placeholder="(555)555-5555"/>
          <button disabled={inputValue.length!==13} type="submit">Submit</button>
      </>
  );
}

export default App;
