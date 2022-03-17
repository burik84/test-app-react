import React from 'react';
import './main.scss';
import { Routes, Route } from 'react-router-dom';
import Users from '../../pages/users/users';
import Profile from '../../pages/profile/profile';
import Loader from '../../components/Loader/Loader';
import { IUser } from '../../shared/interface';

type TProps = {
  isLoading: boolean;
  state: IUser[];
};

const Main = ({ isLoading, state }: TProps) => {
  return (
    <main className="main">
      <nav className="nav">
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
        <Routes>
          <Route
            path="/profile/:username"
            element={isLoading ? <Loader /> : <Profile />}
          />
          <Route
            path="/"
            element={isLoading ? <Loader /> : <Users state={state} />}
          />
          <Route
            path="*"
            element={
              <div style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </div>
            }
          />
        </Routes>
      </section>
    </main>
  );
};

export default Main;
