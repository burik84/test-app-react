import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../shared/interface';

type TProps = {
  user: IUser;
};

const CardUser = ({ user }: TProps) => {
  return (
    <li className="card" key={user.id}>
      <div className="card-user">
        <p className="card-user__name">
          <span>ФИО</span> {user.name}
        </p>
        <p className="card-user__name">
          <span>Город</span>
          {user.address.city}
        </p>
        <p className="card-user__name">
          <span>Компания</span>
          {user.company.name}
        </p>
      </div>
      <div className="card-button">
        <Link to={`/profile/${user.id}`}>Подробнее</Link>
      </div>
    </li>
  );
};

export default CardUser;
