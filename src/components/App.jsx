import user from './UserProfile/user.json';
import data from './Statistics/data.json';
import transactions from './Transactions/transactions.json'


import FriendList from './FriendList/FriendList' 
import Profile from './UserProfile/UserProfile'
import Statistics from './Statistics/Statistics';
import TransactionHistory from './Transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
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

    </div>
  );
};
