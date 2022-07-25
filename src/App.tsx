import { useState } from "react";

interface Dackel {
  message: string;
  status: string;
}

function App() {
  const [dackel, setDackel] = useState<string>();

  const handleGetDackel = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/dachshund/images/random"
    );
    const jsonBody: Dackel = await response.json();
    setDackel(jsonBody.message);
  
  };

  // const handleGetJoke = () => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  if (dackel) {
    return (
      <div>
        <h1>Dackel app</h1>
        <details>
          <summary>Look at this Dackel!</summary>
          <img src={dackel} alt="A cute dackel"/>
        </details>
        <hr />
        <button onClick={handleGetDackel}>Get another dackel</button>
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
        <button onClick={handleGetDackel}>Get new dackel!</button>
      </div>
    );
  }
}

export default App;
