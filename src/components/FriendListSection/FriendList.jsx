import PropTypes from 'prop-types';
import { FriendListWrapper } from 'components/FriendListSection/FriendList.styled';

import FriendListItem from 'components/FriendListSection/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <FriendListWrapper>
      {friends.map(friend => (
        <FriendListItem
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
