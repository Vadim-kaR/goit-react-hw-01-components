import user from './mock/user.json';
import data from './mock/data.json';
import transactions from './mock/transactions.json';

import FriendList from './components/FriendList/FriendList';
import Profile from './components/UserProfile/UserProfile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/Transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        imageUrl={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList />
      <TransactionHistory items={transactions} />;
    </>
  );
};
