import React, { useEffect, useState } from 'react';
import { getData, getListsID } from './shared/services';
import { IData } from './shared/interface';
import '../style/App.scss';

import Header from './layout/header/Header';
import Cards from './layout/cards/Cards';

function App() {
  const [data, setData] = useState<IData[]>([]);
  const [listsID, setListsID] = useState<number[]>([0]);

  useEffect(() => {
    document.title = 'Test App React';
    const fetchData = async () => {
      await getData().then((lists) => {
        setData(lists);
        const resultAlbomID=getListsID(lists)
        setListsID(resultAlbomID);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header lists={listsID} />
      <Cards lists={data} />
    </div>
  );
}

export default App;
