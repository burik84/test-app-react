import React from 'react';
import './users.scss';
import Loader from '../../components/Loader/Loader';

type TProps = {
  isLoading: boolean;
};

const Users = ({ isLoading }: TProps) => {
  return (
    <div className="users">
      <h3>Список пользователей</h3>

      {isLoading ? (
        <Loader />
      ) : (
        <ul className="lists">
          <li>1 user</li>
        </ul>
      )}
    </div>
  );
};

export default Users;
