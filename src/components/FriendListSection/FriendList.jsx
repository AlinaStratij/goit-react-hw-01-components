import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendListSection/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <FriendListItem avatar={friend.avatar} name={friend.name} />
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  // Прописати пропс для масива обєктів
  friends: PropTypes.array,
};
