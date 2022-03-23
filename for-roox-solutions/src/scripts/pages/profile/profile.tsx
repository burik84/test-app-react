import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../../shared/interface';

import './profile.scss';

const FORMVALIDATENUMBER = 8;

type TProps = {
  users: IUser[];
  setState: (data: IUser[]) => void;
};
const Profile = ({users, setState }: TProps) => {
  let { state }: IUser | any = useLocation();
  const navigate = useNavigate();

  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
  const [isValidateForm, setIsValidateForm] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<IUser>(state);
  const [isValidate, setIsValidate] = useState<number[]>([
    1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const handleSubmitProfileUser = () => {
    const idx = users.findIndex((item) => item.id === state.id);
    const newState = users.slice();
    newState.splice(idx, 1, userProfile);
    setState(newState);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(isValidateForm?userProfile:'Not change user');
    if (isValidateForm) {
      handleSubmitProfileUser()
    }
    navigate('/');
  };

  const handleChange = (event: any) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const profile = userProfile;

    let nameValid = true,
      userValid = true,
      emailValid = true,
      streetValid = true,
      cityValid = true,
      zipValid = true,
      phoneValid = true,
      webValid = true;
    let isFormValidate = 0;

    switch (name) {
      case 'name':
        nameValid = /\w{2,}/.test(value);
        profile.name = value;
        break;
      case 'userName':
        userValid = /\w{2,}/.test(value);
        profile.username = value;
        break;
      case 'userEmail':
        emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        profile.email = value;
        break;
      case 'street':
        streetValid = /\w{2,}/.test(value);
        profile.address.street = value;
        break;
      case 'city':
        cityValid = /\w{2,}/.test(value);
        profile.address.city = value;
        break;
      case 'zipCode':
        zipValid = /\d{4,}/.test(value);
        profile.address.zipcode = value;
        break;
      case 'phone':
        phoneValid = /\w{7,}/.test(value);
        profile.phone = value;
        break;
      case 'webSite':
        webValid = /\w{2,}/.test(value);
        profile.website = value;
        break;
      case 'comment':
        profile.comment = value;
        break;
      default:
        break;
    }

    const newValidate = [
      +nameValid,
      +userValid,
      +emailValid,
      +streetValid,
      +cityValid,
      +zipValid,
      +phoneValid,
      +webValid,
    ];
    setIsValidate(newValidate);

    for (let i = 0; i < newValidate.length; i += 1) {
      if (newValidate[0] === 1) isFormValidate+=1
    }

    if (isFormValidate===FORMVALIDATENUMBER) {
      setUserProfile(profile)
      setIsValidateForm(true)
    }else{
      setIsValidateForm(false)
    }
  };
  const handleChangeEditing = () => {
    const status = !isReadOnly;
    setIsReadOnly(status);
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <h2>Профиль пользователя</h2>
        <button
          className={`btn ${!isReadOnly ? 'btn-active' : ''}`}
          onClick={handleChangeEditing}
        >
          Редактировать
        </button>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className={`form ${isReadOnly ? 'form-readOnly' : ''} ${isValidateForm ? 'validate' : ''}`}
      >
        <div className="profile-form">
          <div className="profile__input profile__input-name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              value={userProfile.name}
              onChange={handleChange}
              readOnly={isReadOnly}
              className={!isValidate[0] ? 'non-valid' : ''}
            />
          </div>
          <div className="profile__input profile__input-user-name">
            <label htmlFor="userName">User name</label>
            <input
              type="text"
              name="userName"
              id=""
              value={userProfile.username}
              onChange={handleChange}
              readOnly={isReadOnly}
              className={!isValidate[1] ? 'non-valid' : ''}
            />
          </div>
          <div className="profile__input profile__input-email">
            <label htmlFor="userEmail">E-mail</label>
            <input
              type="email"
              name="userEmail"
              id=""
              value={userProfile.email}
              onChange={handleChange}
              readOnly={isReadOnly}
              className={!isValidate[2] ? 'non-valid' : ''}
            />
          </div>
          <div className="profile__input profile__input-street">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              id=""
              value={userProfile.address.street}
              onChange={handleChange}
              readOnly={isReadOnly}
              className={!isValidate[3] ? 'non-valid' : ''}
            />
          </div>
          <div className="profile__input profile__input-city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id=""
              value={userProfile.address.city}
              onChange={handleChange}
              readOnly={isReadOnly}
              className={!isValidate[4] ? 'non-valid' : ''}
            />
          </div>
          <div className="profile__input profile__input-zip-code">
            <label htmlFor="zipCode">Zip code</label>
            <input
              type="text"
              name="zipCode"
              id=""
              value={userProfile.address.zipcode}
              onChange={handleChange}
              readOnly={isReadOnly}
              className={!isValidate[5] ? 'non-valid' : ''}
            />
          </div>
          <div className="profile__input profile__input-phone">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id=""
              value={userProfile.phone}
              onChange={handleChange}
              readOnly={isReadOnly}
              className={!isValidate[6] ? 'non-valid' : ''}
            />
          </div>
          <div className="profile__input profile__input-web-site">
            <label htmlFor="webSite">Web site</label>
            <input
              type="text"
              name="webSite"
              id=""
              value={userProfile.website}
              onChange={handleChange}
              readOnly={isReadOnly}
              className={!isValidate[7] ? 'non-valid' : ''}
            />
          </div>
          <div className="profile__input profile__input-comment">
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
        </div>
        <div className="profile__submit ">
          <input
            type="submit"
            // value={`${isReadOnly ? 'Назад' : 'Отправить'}`}
            className="btn form__submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
