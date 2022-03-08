import React, { useEffect, useState } from 'react';
import { getData, getListsID, filterData } from './shared/services';
import { IData } from './shared/interface';
import '../style/App.scss';

import Header from './layout/header/Header';
import Cards from './layout/cards/Cards';

function App() {
  const [data, setData] = useState<IData[]>([]);
  const [filter, setFilterData] = useState<IData[]>([]);
  const [listsID, setListsID] = useState<number[]>([0]);

  useEffect(() => {
    document.title = 'Test App React';
    const fetchData = async () => {
      await getData().then((lists) => {
        setData(lists);
        setFilterData(lists)
        const resultAlbomID=getListsID(lists)
        setListsID(resultAlbomID);
      });
    };
    fetchData();
  }, []);

  const clickFilterButton=(buttonID:number)=>{
    console.log(buttonID);

    const result=filterData(data,buttonID)
    setFilterData(result)
  }

  return (
    <div className="App">
      <Header lists={listsID} getFilter={clickFilterButton}/>
      <Cards lists={filter} />
    </div>
  );
}

export default App;
