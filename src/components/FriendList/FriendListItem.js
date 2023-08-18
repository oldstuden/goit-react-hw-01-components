export const FriendListItem = ({ friends }) => {
  return (
    <ul>
      {friends.map(item => {
        return (
          <li key={item.id}>
            <span className="status">❤</span>
            <img
              className="avatar"
              src={item.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
