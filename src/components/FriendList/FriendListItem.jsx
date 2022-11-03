import {
  FriendListItemsWrapper,
  FriendListItemStatus,
  FriendListItemName,
} from 'components/FriendList/FriendListItems.styled';

export default function FriendListItem(items) {
  return (
    <FriendListItemsWrapper>
      <FriendListItemStatus isOnline={items.isOnline}>
        {items.isOnline}
      </FriendListItemStatus>
      <img className="avatar" src={items.avatar} alt="User avatar" width="60" />
      <FriendListItemName>{items.name}</FriendListItemName>
    </FriendListItemsWrapper>
  );
}
