import FriendsItems from './FriendsItem';
import friends from '../../mock/friends.json';
import { FriensList } from './friends.styled';

const FriendList = () => {
  return (
    <FriensList>
      <FriendsItems friends={friends} />
    </FriensList>
  );
};

export default FriendList;
