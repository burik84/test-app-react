import React from 'react';
import { Pagination } from 'react-bootstrap';

type TProps = {
  currentPage: number;
  pages: number;
  clickPages: (e: any) => void;
};

const PaginationC = ({ currentPage, pages, clickPages }: TProps) => {
  const showListsPages = () => {
    const listPages = [];
    const numbersPage = 10;
    let startPages = 2;
    let lastPages = pages;
    if (pages > numbersPage) {
      startPages = currentPage > 4 ? currentPage - 2 : 2;
      if (currentPage < 5) {
        lastPages = startPages + 5;
      } else {
        lastPages = currentPage < pages - 5 ? currentPage + 2 : pages;
      }
    }

    listPages.push(<Pagination.First disabled={currentPage === 1} />);
    listPages.push(<Pagination.Prev disabled={currentPage === 1} />);
    listPages.push(
      <Pagination.Item key={1} active={currentPage === 1}>
        {1}
      </Pagination.Item>
    );

    if (startPages!==2) listPages.push(<Pagination.Ellipsis />);

    for (let number = startPages; number < lastPages; number += 1) {
      listPages.push(
        <Pagination.Item key={number} active={number === currentPage}>
          {number}
        </Pagination.Item>
      );
    }

    if (pages > numbersPage &&lastPages!==pages) listPages.push(<Pagination.Ellipsis />);

    listPages.push(
      <Pagination.Item key={pages} active={currentPage === pages}>
        {pages}
      </Pagination.Item>
    );
    listPages.push(<Pagination.Next disabled={currentPage === pages} />);
    listPages.push(<Pagination.Last disabled={currentPage === pages} />);

    return listPages;
  };
  return (
      <Pagination onClick={clickPages} className='mb-4'>
        {showListsPages()}
      </Pagination>
  );
};

export { PaginationC };
