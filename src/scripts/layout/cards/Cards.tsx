import React from 'react';
import { IData, IListsCard } from '../../shared/interface';
import './cards.scss';

const Cards = ({ lists }: IListsCard) => {
  const ShowCardID = () => {
    const listCards = lists.map((card: IData) => (
      <li key={card.id.toString()} className="card">
        <img src={card.thumbnailUrl} alt="" />
        <h2>
          {card.title}
        </h2>
      </li>
    ));
    return <ul className="lists__card">{listCards}</ul>;
  };

  return (
    <React.Fragment>
      <main>
        <ShowCardID />
      </main>
    </React.Fragment>
  );
};

export default Cards;
