import styled from '@emotion/styled';

export const FriendListItemsWrapper = styled.li`
  border-radius: 5px;
  box-shadow: 10px 5px 5px rgb(136, 134, 134);
  border: solid 2px rgb(177, 176, 176);
  display: flex;
  margin-bottom: 20px;
  padding: 20px 0 20px 0;
  background-color: white;
`;
export const FriendListItemStatus = styled.span`
  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    } else {
      return `red`;
    }
  }};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 20px;
`;
export const FriendListItemName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
`;
