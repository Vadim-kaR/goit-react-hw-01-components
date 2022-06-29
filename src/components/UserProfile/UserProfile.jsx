import PropTypes from 'prop-types';
import {
  MainWraper,
  UserNameInfo,
  MetaTitle,
  MetaList,
  MetaItem,
  UserText,
  UserAvatar,
} from './UserProfile.styled';

const Profile = ({
  userName,
  tag,
  location,
  imageUrl,
  followers,
  views,
  likes,
}) => {
  return (
    <MainWraper>
      <UserNameInfo>
        <UserAvatar src={imageUrl} alt="User avatar" />
        <UserText>{userName}</UserText>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </UserNameInfo>
      <MetaList>
        <MetaItem>
          <MetaTitle>Followers</MetaTitle>
          <span>{followers}</span>
        </MetaItem>
        <MetaItem>
          <MetaTitle>Views</MetaTitle>
          <span>{views}</span>
        </MetaItem>
        <MetaItem>
          <MetaTitle>Likes</MetaTitle>
          <span>{likes}</span>
        </MetaItem>
      </MetaList>
    </MainWraper>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
