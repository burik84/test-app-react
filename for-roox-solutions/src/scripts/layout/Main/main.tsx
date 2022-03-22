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
  setIsSorting: (type: boolean) => void;
  setIsTyping: (type: string) => void;
  isType?: string;
};

const Main = ({
  isLoading,
  state,
  setIsSorting,
  setIsTyping,
  isType,
}: TProps) => {
  const handleCLickButton = (e: any) => {
    setIsSorting(true);
    const target = e.target;
    if (target.dataset.sort) setIsTyping(target.dataset.sort);
  };
  const btnSityClass = `btn ${isType === 'sity' ? 'active' : ' '}`;
  const btnCompanyClass = `btn ${isType === 'company' ? 'active' : ' '}`;
  return (
    <main className="main">
      <nav className="nav">
        <h2>Сортировка</h2>
        <ul onClick={(e) => handleCLickButton(e)}>
          <li>
            <button
              data-sort="sity"
              className={btnSityClass}
              disabled={isType === 'sity'}
            >
              по городу
            </button>
          </li>
          <li>
            <button
              data-sort="company"
              className={btnCompanyClass}
              disabled={isType === 'company'}
            >
              по компании
            </button>
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
