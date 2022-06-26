import PropTypes from 'prop-types';
import {MainWraper, UserNameInfo, MetaTitle} from './UserProfile.styled'


const Profile = ({userName,
    tag,
    location,
    imageUrl,
    followers,
    views,
    likes}) => {
    return (<MainWraper>
    <UserNameInfo>
      <img
        src={imageUrl}
        alt="User avatar"
       />
      <p >{userName}</p>
      <p >@{tag}</p>
      <p >{location}</p>
    </UserNameInfo>
    <ul>
      <li>
        <MetaTitle >Followers</MetaTitle>
        <span>{followers}</span>
      </li>
      <li>
        <MetaTitle>Views</MetaTitle>
        <span>{views}</span>
      </li>
      <li>
        <MetaTitle>Likes</MetaTitle>
        <span>{likes}</span>
      </li>
    </ul>
  </MainWraper>)
  }

  Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,

  }

  export default Profile;
