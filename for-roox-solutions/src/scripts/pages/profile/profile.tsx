import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IUser } from '../../shared/interface';
import './profile.scss';


const Profile = () => {
  let { state }:IUser|any = useLocation();

  const handleSubmit=(e:any) =>{
    e.preventDefault()
    console.log('submit form');
  }
  const inputChangedHandler = (event:any) => {
    const updatedKeyword = event.target.value;
    console.log(updatedKeyword);

}
  return (
    <div>
      <div className="profile-header">
        <h1>Профиль пользователя</h1>
        <button className="btn">Редактировать</button>
      </div>
      <div className="profile-form" >
        <form action="" onSubmit={handleSubmit} >
          <div className="profile__name">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" value={state.name} />
          </div>
          <div className="profile__user-name">
            <label htmlFor="userName">User name</label>
            <input type="text" name="userName" id="" value={state.username} />
          </div>
          <div className="profile__email">
            <label htmlFor="userEmail">E-mail</label>
            <input type="email" name="userEmail" id="" value={state.email} />
          </div>
          <div className="profile__street">
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="" value={state.address.street} />
          </div>
          <div className="profile__city">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="" value={state.address.city} />
          </div>
          <div className="profile__zip-code">
            <label htmlFor="zipCode">Zip code</label>
            <input type="text" name="zipCode" id="" value={state.address.zipcode} />
          </div>
          <div className="profile__phone">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="" value={state.phone} />
          </div>
          <div className="profile__web-site">
            <label htmlFor="webSite">Web site</label>
            <input type="text" name="webSite" id="" value={state.website} />
          </div>
          <div className="profile__comment">
            <label htmlFor="comment">Comment</label>
            <textarea name="" id="comment" cols={30} rows={10}></textarea>
          </div>
          <div className="profile__submit">
            Link
            <Link to='/'><input type="submit" value="Отправить"/></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
