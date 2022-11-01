import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  ProfileDescription,
  TextWrapper,
  ProfileImg,
  ProfileList,
  ProfileItem,
  SpanText,
  SpanValue,
} from 'components/ProfileSection/Profile.styled';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <ProfileWrapper>
      <ProfileDescription>
        <ProfileImg src={avatar} alt="User avatar" className="avatar" />
        <TextWrapper>{username}</TextWrapper>
        <TextWrapper>@{tag}</TextWrapper>
        <TextWrapper>{location}</TextWrapper>
      </ProfileDescription>
      <ProfileList>
        <ProfileItem>
          <SpanText>Followers</SpanText>
          <SpanValue> {stats.followers} </SpanValue>
        </ProfileItem>
        <ProfileItem>
          <SpanText>Views</SpanText>
          <SpanValue> {stats.views} </SpanValue>
        </ProfileItem>
        <ProfileItem>
          <SpanText>Likes</SpanText>
          <SpanValue> {stats.likes} </SpanValue>
        </ProfileItem>
      </ProfileList>
    </ProfileWrapper>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
