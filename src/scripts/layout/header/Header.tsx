import React from 'react';
import './header.scss';
import { Button, ButtonToolbar, ButtonGroup, Container } from 'react-bootstrap';

type TProps = {
  lists: number[];
  getFilter: (number: number) => void;
  currentAlbomID: number;
};

const Header = ({ lists, getFilter, currentAlbomID = -1 }: TProps) => {
  const ShowListsID = () => {
    const listItems = lists.map((number: number) => (
      <ButtonGroup size="sm" className="m-1" key={number.toString()}>
        <Button
          variant={number === currentAlbomID ? 'success' : 'light'}
          onClick={() => getFilter(number)}
          style={{ width: '3rem' }}
        >
          {number}
        </Button>
      </ButtonGroup>
    ));

    listItems.push(
      <ButtonGroup size="sm" className="m-1" key="-1">
        <Button
          variant={currentAlbomID === -1 ? 'success' : 'light'}
          onClick={() => getFilter(-1)}
          style={{ width: '3rem' }}
        >
          All
        </Button>
      </ButtonGroup>
    );

    return (
      <Container>
        <ButtonToolbar aria-label="Toolbar with button groups">
          {listItems}
        </ButtonToolbar>
      </Container>
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
