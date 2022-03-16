import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './profile.scss';

import Loader from '../../components/Loader/Loader';

type TProps = {
  isLoading: boolean;
};

const Profile = ({ isLoading }: TProps) => {
  let { username } = useParams();
  let { pathname } = useLocation();
  let { state } = useLocation();

  return (
    <div>
      <h1>{username} Profile</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <p> Registered on:{state} </p>
          <p> Visiting: {pathname}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
