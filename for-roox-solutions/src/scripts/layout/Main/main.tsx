import React from 'react';
import './main.scss';
import { Routes, Route } from 'react-router-dom';
import Users from '../../pages/users/users';
import Profile from '../../pages/profile/profile';
import Loader from '../../components/Loader/Loader';

type TProps = {
  isLoading: boolean;
};

const Main = ({ isLoading }: TProps) => {
  return (
    <main className="main">
      <nav>
        <h2>Сортировка</h2>
        <ul>
          <li>
            <button>По городу</button>
          </li>
          <li>
            <button>По компании</button>
          </li>
        </ul>
      </nav>
      <section className="content">
        {/* <Routes>
          <Route path="/profile/:username">
            {isLoading ? <Loader /> : <Profile isLoading />}
          </Route>
          <Route path="/">{isLoading ? <Loader /> : <Users isLoading />}</Route>
        </Routes> */}
      </section>
    </main>
  );
};

export default Main;
