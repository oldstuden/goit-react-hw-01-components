import { ItemListFriends, StatusItem } from './FriendListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemListFriends>
      <StatusItem $level={isOnline}></StatusItem>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ItemListFriends>
  );
};
