import {
  Description,
  Images,
  List,
  ListItem,
  Wrapper,
  Quantity,
  Text,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Images src={avatar} alt="user avatar" className="avatar" />
        <h2 className="name">{username}</h2>
        <Text className="tag">{'@' + tag}</Text>
        <Text className="location">{location}</Text>
      </Description>
      <List>
        <ListItem>
          <span className="label">followers</span>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <span className="label">views</span>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <span className="label">likes</span>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </List>
    </Wrapper>
  );
};
