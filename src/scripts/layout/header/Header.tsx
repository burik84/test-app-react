import React from 'react';
import './header.scss';

type TProps = {
  lists: number[];
  getFilter: (number:number)=>void;
};

const Header = ({ lists, getFilter }:TProps) => {
  const ShowListsID = () => {
    const listItems = lists.map((number: number) => (
      <li key={number.toString()}>
        <button className="button" onClick={() => getFilter(number)}>
          {number}
        </button>
      </li>
    ));
    listItems.push(
      <li key="-1">
        <button className="button button-active" onClick={() => getFilter(-1)}>Все</button>
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
