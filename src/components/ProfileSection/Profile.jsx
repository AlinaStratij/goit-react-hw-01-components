import PropTypes from 'prop-types';
import css from '../ProfileSection/Profile.module.css';

export default function Profile({ avatar, username, tag, location, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // stats: PropTypes.number.isRequired,
  // розібратися з пропсом
  // followers: PropTypes.number.isRequired,
  // views: PropTypes.number.isRequired,
  // likes: PropTypes.number.isRequired,
};