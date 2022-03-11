import React, { useEffect, useState } from 'react';
import {
  getData,
  getFilterData,
  getListsID,
  filterData,
} from './shared/services';
import { IData } from './shared/interface';

import '../style/App.scss';

import Header from './layout/header/Header';
import Cards from './layout/cards/Cards';
import {SpinnerC as Spinner} from './components/spinner/spinner';

function App() {
  const [data, setData] = useState<IData[]>([]);
  const [dataFilter, setFilterData] = useState<IData[]>([]);
  const [albomID, setAlbomID] = useState<number>(-1);
  const [listsID, setListsID] = useState<number[]>([0]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      if (albomID === -1) {
        const fetchData = async () => {
          await getData()
            .then((lists) => {
              setData(lists);
              setFilterData(lists);
              const resultAlbomID = getListsID(lists);
              setListsID(resultAlbomID);
            })
            .then(() => {
              setIsLoading(false);
            });
        };
        fetchData();
      } else {
        // const fetchData = async () => {
        //   await getFilterData(albomID)
        //     .then((lists) => {
        //       setData(lists);
        //     })
        //     .then(() => {
        //       setIsLoading(false);
        //     });
        // };
        // fetchData();
        const result = filterData(data, albomID);
        setFilterData(result);
        setIsLoading(false);
      }
    }
  }, [isLoading]);

  const clickFilterButton = (buttonID: number) => {
    setAlbomID(buttonID);
    setIsLoading(true);
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
      <Header
        lists={listsID}
        getFilter={clickFilterButton}
        currentAlbomID={albomID}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Cards lists={dataFilter} deleteCard={clickDeleteCard} />
      )}
    </div>
  );
}

export default App;
