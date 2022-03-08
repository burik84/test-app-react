import React from 'react';
import { IData, IListsCard } from '../../shared/interface';
import './cards.scss';

type TProps = {
  lists: IData[];
  deleteCard: (number:number)=>void;
};

const Cards = ({ lists, deleteCard }:TProps) => {
  const ShowCardID = () => {
    const listCards = lists.map((card: IData) => (
      <li key={card.id.toString()} className="card">
        <img src={card.thumbnailUrl} alt="" />
        <h2>
          {card.title}
        </h2>
        <button onClick={() => deleteCard(card.id)} >delete</button>
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
