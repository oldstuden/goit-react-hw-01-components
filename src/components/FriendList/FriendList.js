import { ListFriends } from './FriendList.styled';
import { FriendsListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(item => {
        return (
          <FriendsListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ListFriends>
  );
};
