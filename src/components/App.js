import { FriendListItem } from './FriendList/FriendListItem';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transaction from './transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendListItem friends={friends} />
      <TransactionHistory items={transaction} />
      <GlobalStyle />
    </div>
  );
};
