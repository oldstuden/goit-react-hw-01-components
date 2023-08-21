import {
  ItemListFriends,
  ListFriends,
  StatusItem,
} from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(item => {
        return (
          <ItemListFriends key={item.id}>
            <StatusItem $level={item.isOnline}></StatusItem>
            <img
              className="avatar"
              src={item.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{item.name}</p>
          </ItemListFriends>
        );
      })}
    </ListFriends>
  );
};
