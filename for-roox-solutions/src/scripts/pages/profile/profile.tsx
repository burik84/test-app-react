import React, { useEffect, useState  } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IUser, IUserProfile } from '../../shared/interface';

import './profile.scss';

const Profile = () => {
  let { state }: IUser | any = useLocation();
  const navigate = useNavigate();

  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
  const [isChange, setIsChange] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<IUserProfile>(state);

  const handleSubmit = (e: any) => {
    console.log('submit form', userProfile);
    e.preventDefault();
    navigate('/');
  };

  const handleChange = (event: any) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const profile = userProfile;
    switch (name) {
      case 'name':
        profile.name = value;
        break;
      case 'userName':
        profile.username = value;
        break;
      case 'userEmail':
        profile.email = value;
        break;
      case 'street':
        state.address.street = value;
        break;
      case 'city':
        profile.address.city = value;
        break;
      case 'zipCode':
        profile.address.zipcode = value;
        break;
      case 'phone':
        profile.phone = value;
        break;
      case 'webSite':
        profile.website = value;
        break;
      case 'comment':
        profile.comment = value;
        break;
      default:
        break;
    }
    setUserProfile(profile);
    setIsChange(true);
  };
  const handleChangeEditing = () => {
    const status = !isReadOnly;
    setIsReadOnly(status);
  };

  useEffect(() => {
    if (isChange) setIsChange(false);
  }, [isReadOnly, isChange]);

  return (
    <div>
      <div className="profile-header">
        <h1>Профиль пользователя</h1>
        <button
          className={`btn ${!isReadOnly ? 'btn-active' : ''}`}
          onClick={handleChangeEditing}
        >
          Редактировать
        </button>
      </div>
      <div className="profile-form">
        <form
          action=""
          onSubmit={handleSubmit}
          className={`form ${isReadOnly ? 'form-readOnly' : ''}`}
        >
          <div className="profile__name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              value={userProfile.name}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className="profile__user-name">
            <label htmlFor="userName">User name</label>
            <input
              type="text"
              name="userName"
              id=""
              value={userProfile.username}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className="profile__email">
            <label htmlFor="userEmail">E-mail</label>
            <input
              type="email"
              name="userEmail"
              id=""
              value={userProfile.email}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className="profile__street">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              id=""
              value={userProfile.address.street}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className="profile__city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id=""
              value={userProfile.address.city}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className="profile__zip-code">
            <label htmlFor="zipCode">Zip code</label>
            <input
              type="text"
              name="zipCode"
              id=""
              value={userProfile.address.zipcode}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className="profile__phone">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id=""
              value={userProfile.phone}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className="profile__web-site">
            <label htmlFor="webSite">Web site</label>
            <input
              type="text"
              name="webSite"
              id=""
              value={userProfile.website}
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className="profile__comment">
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              id="comment"
              cols={30}
              rows={10}
              onChange={handleChange}
              readOnly={isReadOnly}
            ></textarea>
          </div>
          <div className="profile__submit ">
            {/* <Link to="/"> */}
              <input
                type="submit"
                value={`${isReadOnly?'Назад':'Отправить'}`}
                className="btn form__submit"
              />
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
