import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendList/FriendListItem';

import { FriendListWrapper } from 'components/FriendList/FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListWrapper>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListWrapper>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
