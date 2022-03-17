import React, {useState, useEffect} from 'react';

import logo from '../assets/logo.svg';
import '../styles/App.scss';

import {IUser} from './shared/interface';
import {getDataUsers} from './shared/service';

import Main from './layout/Main/main';

function App() {
  const [state, setState] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      await getDataUsers()
        .then((lists) => {
          setState(lists);
          console.log(lists);

          return lists;
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log('Something went wrong', err.message);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Main isLoading={isLoading} state={state} />
    </div>
  );
}

export default App;
