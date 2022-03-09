import React, { useEffect, useState } from 'react';
import { getData, getListsID, filterData } from './shared/services';
import { IData } from './shared/interface';

import '../style/App.scss';

import Header from './layout/header/Header';
import Cards from './layout/cards/Cards';

function App() {
  const [data, setData] = useState<IData[]>([]);
  const [dataFilter, setFilterData] = useState<IData[]>([]);
  const [albomID, setAlbomID] = useState<number>(-1);
  const [listsID, setListsID] = useState<number[]>([0]);

  useEffect(() => {
    const fetchData = async () => {
      await getData().then((lists) => {
        setData(lists);
        setFilterData(lists);
        const resultAlbomID = getListsID(lists);
        setListsID(resultAlbomID);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const result = filterData(data, albomID);
    setFilterData(result);
  }, [albomID]);

  const clickFilterButton = (buttonID: number) => {
    // const result = filterData(data, buttonID);
    setAlbomID(buttonID)
    // setFilterData(result);
  };
  const clickDeleteCard = (buttonID: number) => {
    let result: IData[] = [];
    dataFilter.forEach((item: IData, index) => {
      if (item.id === buttonID) {
        const ind = index;
        result = [...dataFilter.slice(0, ind), ...dataFilter.slice(ind + 1)];
        setFilterData(result);
      }
    });
  };
  return (
    <div className="App">
      <Header lists={listsID} getFilter={clickFilterButton} currentAlbomID={albomID} />
      <Cards lists={dataFilter} deleteCard={clickDeleteCard} />
    </div>
  );
}

export default App;
