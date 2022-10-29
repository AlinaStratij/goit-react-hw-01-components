import Profile from 'components/ProfileSection/Profile';
import Statistics from 'components/Statistics';
import FriendList from './FriendList';

import user from '../information/user.json';
import data from '../information/data.json';
import friends from '../information/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../information/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
