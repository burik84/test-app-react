import React from 'react';
import './header.scss';
import { IListsID } from '../../shared/interface';

const Header = ({ lists }: IListsID) => {
  const ShowListsID = () => {
    const listItems = lists.map((number) => (
      <li key={number.toString()}>
        <button className="button">{number}</button>
      </li>
    ));
    listItems.push(
      <li key="all">
        <button className="button button-active">Все</button>
      </li>
    );
    return <ul className="lists__button">{listItems}</ul>;
  };

  return (
    <React.Fragment>
      <header className="header">
        <ShowListsID />
      </header>
    </React.Fragment>
  );
};

export default Header;
