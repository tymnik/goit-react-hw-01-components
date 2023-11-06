import React from 'react';
import friendsData from '../json/friends.json';
import './FriendList.css';

const FriendList = () => {
  return (
    <ul className="friendList">
      {friendsData.map((friend, index) => (
        <FriendListItem key={index} item={friend} />
      ))}
    </ul>
  );
};

const FriendListItem = ({ item }) => {
  const { avatar, name, isOnline } = item;

  return (
    <li className="friendItem">
      <span className={isOnline ? 'status online' : 'status offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <img className="friendAvatar" src={avatar} alt="User avatar" width="48" />
      <p className="friendName">{name}</p>
    </li>
  );
};

export default FriendList;
