import React, { useEffect, useState } from 'react';
import {getData} from './shared/services';
import {IData} from './shared/interface';
import logo from '../images/logo.svg';
import '../style/App.scss';

function App() {
  const [data, setData] = useState<IData[]|undefined>();
  useEffect(() => {
    document.title = 'Test App React';
    const fetchData = async () => {
      const result:IData[] = await getData();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
