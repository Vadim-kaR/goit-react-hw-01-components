import FriendsItems from "./FriendsItem";
import friends from './friends.json'

const FriendList = () => {
    return (
    <ul className="friend-list">
        <FriendsItems friends={friends}/>
  </ul>)
}

export default FriendList;