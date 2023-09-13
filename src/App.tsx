import { useState } from "react";

function App(){
  const [userName, setUserName] = useState('Woorld')
  return (
    <div>
      <h1>Heelo {userName}!!!!</h1>
      <button onClick={() => setUserName("Sahitya")}>Sahitya</button>
      <button onClick={() => setUserName("Subash")}>Subash</button>
    </div>
  )
}

export default App;