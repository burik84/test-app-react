import React, { useState, useEffect } from 'react';

import '../styles/App.scss';

import { IUser } from './shared/interface';
import { getDataUsers } from './shared/service';

import Main from './layout/Main/main';

function App() {
  const [state, setState] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSorting, setIsSorting] = useState<boolean>(true);
  const [isType, setIsTyping] = useState<string>('');
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

  useEffect(() => {
    if (isSorting) {
      setIsLoading(true)
      getSorted(isType);
    }
  }, [isSorting]);

  const getSorted = (type: string) => {
    const arr: IUser[] = state.slice();
    switch (type) {
      case 'sity':
        arr.sort((itemA, itemB) =>
          itemA.address.city < itemB.address.city ? -1 : 1
        );
        break;
      case 'company':
        arr.sort((itemA, itemB) =>
          itemA.company.name < itemB.company.name ? -1 : 1
        );
        break;
      default:
        break;
    }
    setState(arr);
    setIsLoading(false)
    setIsSorting(false)
  };
  return (
    <div className="App">
      <Main isLoading={isLoading} state={state} setIsSorting={setIsSorting} setIsTyping={setIsTyping} isType={isType} changeState={setState} />
    </div>
  );
}

export default App;
