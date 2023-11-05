import React from 'react';
import userData from '../json/user.json';
import './Profile.css';

const Profile = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className='statsItem'>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className='statsItem'>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className='statsItem'>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
