import React from 'react';
import './users.scss';
import { IUser, IUserCard } from '../../shared/interface';
import CardUser from '../../components/cardUser/cardUser';

type TProps = {
  state: IUser[];
};

const Users = ({ state }: TProps) => {
  return (
    <div className="users">
      <h3>Список пользователей</h3>
      <ul className="lists">
        {state.map((item: IUser) => (
          <CardUser user={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Users;