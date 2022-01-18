import React, {useState} from "react";

function App() {

  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false)

  return (
    <div className="App">
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form> 
        <input type="text" id="result" readOnly/>
        <input type="text" id="num" placeholder="Enter number"/>
        <button>Add</button>
        <button>Clear</button>
      </form>
    </div>
  );
}

export default App;
