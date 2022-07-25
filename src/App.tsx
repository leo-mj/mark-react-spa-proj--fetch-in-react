import { useState } from "react";

interface Dackel {
  message: string;
  status: string;
}

function App() {
  const [prevDackelArray, setDackelArray] = useState<(string|undefined)[]>([]);

  const handleDackelArray = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/dachshund/images/random"
    );
    const jsonBody: Dackel = await response.json();
    setDackelArray(prevDackelArray => [jsonBody.message, ...prevDackelArray]);
  }

  if (prevDackelArray.length>0) {
    return (
      <div>
        <h1>Dackel app</h1>
        <details>
          <summary>Look at this Dackel!</summary>
          <img src={prevDackelArray[0]} alt="A cute dackel" width="400px"/>
        </details>
        <hr />
        <button onClick={handleDackelArray}>Get another dackel</button>
        {prevDackelArray.length > 1 &&
        <details>
          <summary>Here are your other dackels!</summary>
          {prevDackelArray.map((dackel, i)=>
            (i>0) &&<img key={i} src={dackel} alt="another cute dackel" width="200px"/>)}
        </details>}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dackel app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dackel from an API!
        </p>
        <button onClick={handleDackelArray}>Get new dackel!</button>
      </div>
    );
  }
}

export default App;
