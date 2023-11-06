import React from 'react';

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

export default FriendListItem;
