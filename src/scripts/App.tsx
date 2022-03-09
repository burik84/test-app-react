import React, { useEffect, useState } from 'react';
import { getData, getListsID, filterData } from './shared/services';
import { IData } from './shared/interface';
import { Spinner } from 'react-bootstrap';

import '../style/App.scss';

import Header from './layout/header/Header';
import Cards from './layout/cards/Cards';

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
      }
    }
  }, [isLoading]);

  useEffect(() => {
    const result = filterData(data, albomID);
    setFilterData(result);
    setIsLoading(false);
  }, [albomID]);

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

  const showSpinner = () => {
    console.log(isLoading);

    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };
  return (
    <div className="App">
      <Header
        lists={listsID}
        getFilter={clickFilterButton}
        currentAlbomID={albomID}
      />
      {isLoading ? (
        showSpinner()
      ) : (
        <Cards lists={dataFilter} deleteCard={clickDeleteCard} />
      )}
    </div>
  );
}

export default App;
