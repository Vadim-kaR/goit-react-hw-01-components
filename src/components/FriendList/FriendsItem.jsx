import PropTypes from 'prop-types';
import { Item, IsOnline, IsOfline, Name } from './friends.styled';

const FriendsItems = ({friends}) => {
    return friends.map(friend => (
        <Item  key={friend.id}>
            {friend.isOnline? <IsOnline ></IsOnline>: <IsOfline ></IsOfline> }
            
            <img  src={friend.avatar} alt="User avatar" width="48" />
            <Name >{friend.name}</Name>
        </Item>
    ))
}

FriendsItems.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }))
}

export default FriendsItems;