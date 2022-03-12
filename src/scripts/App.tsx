import React, { useEffect, useState } from 'react';
import {
  getData,
  getListsID,
  filterData,
} from './shared/services';
import { IData } from './shared/interface';

import '../style/App.scss';

import Header from './layout/header/Header';
import Cards from './layout/cards/Cards';
import { SpinnerC as Spinner } from './components/spinner/spinner';
import { PaginationC as Pagination } from './components/pagination/Pagination';
import { Container } from 'react-bootstrap';

function App() {
  const [data, setData] = useState<IData[]>([]);
  const [dataFilter, setFilterData] = useState<IData[]>([]);
  const [albomID, setAlbomID] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([0, 0]);
  const [listsID, setListsID] = useState<number[]>([0]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingCard, setIsLoadingCard] = useState<boolean>(false);

  const numberCardAlltoPage = 50;
  const numberCardtoPage = 10;

  const getAllPages = (length: number) => {
    const number = length > 1000 ? numberCardAlltoPage : numberCardtoPage;
    const result: number = Math.floor(length / number);
    return [result, number];
  };

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
              return lists;
            })
            .then((lists) => {
              setPages(getAllPages(lists.length));
              setIsLoading(false);
            })
            .catch(() => {
              setData([]);
              setFilterData([]);
              setListsID([]);
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
        setPages(getAllPages(result.length));
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      if (albomID === -1) {
        setFilterData(data);
        setPages(getAllPages(data.length));
        setIsLoading(false);
      } else {
        const result = filterData(data, albomID);
        setFilterData(result);
        setPages(getAllPages(result.length));
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoadingCard) {
      setTimeout(() => {
        setIsLoadingCard(false);
      }, 1000);
    }
  }, [isLoadingCard]);

  const getCardsToPage = (): IData[] => {
    const startNumber = (currentPage - 1) * pages[1];
    const lastNumber = currentPage * pages[1];
    const result: IData[] = dataFilter.slice(startNumber, lastNumber);
    return result;
  };

  const clickFilterButton = (buttonID: number) => {
    setAlbomID(buttonID);
    setCurrentPage(1);
    setIsLoading(true);
  };

  const clickDeleteCard = (buttonID: number) => {
    let result: IData[] = [];
    let resultFilter: IData[] = [];
    dataFilter.forEach((item: IData, index) => {
      if (item.id === buttonID) {
        const ind = index;
        resultFilter = [
          ...dataFilter.slice(0, ind),
          ...dataFilter.slice(ind + 1),
        ];
        result = [...data.slice(0, ind), ...data.slice(ind + 1)];
        setData(result);
        setFilterData(resultFilter);
      }
    });
  };
  const changePages = (e: any) => {
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (target === currentTarget) {
      return;
    }
    if (+target.innerHTML) {
      setCurrentPage(+target.innerHTML);
      setIsLoadingCard(true);
      return;
    }

    const text = target.innerText;
    if (/›/.test(text)) {
      if (currentPage < pages[0]) {
        setCurrentPage(currentPage + 1);
        setIsLoadingCard(true);
      }
    }
    if (/»/.test(text)) {
      if (currentPage < pages[0]) {
        setCurrentPage(pages[0]);
        setIsLoadingCard(true);
      }
    }
    if (/‹/.test(text)) {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        setIsLoadingCard(true);
      }
    }
    if (/«/.test(text)) {
      if (currentPage > 1) {
        setCurrentPage(1);
        setIsLoadingCard(true);
      }
    }
  };
  return (
    <div className="App">
      <Header
        lists={listsID}
        getFilter={clickFilterButton}
        currentAlbomID={albomID}
      />
      <main>
        {isLoading ? (
          <Spinner />
        ) : (
          <Container>
            <Pagination
              currentPage={currentPage}
              pages={pages[0]}
              clickPages={changePages}
            />
            {isLoadingCard ? (
              <Spinner />
            ) : (
              <Cards lists={getCardsToPage()} deleteCard={clickDeleteCard} />
            )}
          </Container>
        )}
      </main>
    </div>
  );
}

export default App;
