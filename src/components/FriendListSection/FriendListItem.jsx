import {
  FriendListItemWrapper,
  FriendListItemsStatus,
  FriendListItemsName,
} from 'components/FriendListSection/FriendListItems.styled';
export default function FriendListItem(items) {
  return (
    <FriendListItemWrapper key={items.id}>
      <FriendListItemsStatus>{items.isOnline}</FriendListItemsStatus>
      <img className="avatar" src={items.avatar} alt="User avatar" width="60" />
      <FriendListItemsName>{items.name}</FriendListItemsName>
    </FriendListItemWrapper>
  );
}
