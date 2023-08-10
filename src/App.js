import logo from './logo.svg';
import './App.css';
import catfactsSdk from "catfacts-sdk"
import React, {useEffect, useState} from 'react';

const sdk = new catfactsSdk.com.bpavuk.catfacts.CatFactsJs()

function App() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    sdk.getCatFact()
      .then((res) => {
        console.log(res.fact)
        setFact(res.fact);
      })
      .catch((error) => {
        console.error('Error fetching cat fact:', error);
      });
  }, []); // Run this effect once on component mount

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {fact ? <p>Your random cat fact is: {fact}</p> : <p>Loading cat fact...</p>}
      </header>
    </div>
  );
}

export default App;
