import React from 'react';
import './header.scss';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

type TProps = {
  lists: number[];
  getFilter: (number: number) => void;
  currentAlbomID:number;
};

const Header = ({ lists, getFilter, currentAlbomID=-1}: TProps) => {

  const ShowListsID = () => {

    const listItems = lists.map((number: number) =>(
      <ButtonGroup size="sm" className="m-1" key={number.toString()}>
        <Button variant={number===currentAlbomID?'success':'light'}  onClick={() => getFilter(number)}>{number}</Button>
      </ButtonGroup>
    ));

    listItems.push(
      <ButtonGroup size="sm" className="m-1" key="-1">
        <Button variant={currentAlbomID===-1?'success':'light'} onClick={() => getFilter(-1)}>All</Button>
      </ButtonGroup>
    );

    return (
      <ButtonToolbar aria-label="Toolbar with button groups">
        {listItems}
      </ButtonToolbar>
    );
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
