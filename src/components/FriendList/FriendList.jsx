import React from 'react';
import FriendListItem from './FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map((friend, index) => (
        <FriendListItem key={index} item={friend} />
      ))}
    </ul>
  );
};
export default FriendList;
