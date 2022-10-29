import PropTypes from 'prop-types';
export default function FriendListItem(props) {
  return (
    <div>
      <span className="status"></span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </div>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
