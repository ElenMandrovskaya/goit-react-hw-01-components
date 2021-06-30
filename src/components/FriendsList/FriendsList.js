import PropTypes from 'prop-types';
import {
  Friendslist,
  FriendsCard,
  Online,
  Offline,
  FriendAvatar,
  FriendName,
} from './FriendsList.styles';
// import friends from '../../data/friends.json';

export default function FriendsList({ friends }) {
  return (
    <Friendslist>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsCard key={id}>
          {isOnline ? <Online /> : <Offline />}
          <FriendAvatar src={avatar} alt={name} width="75" />
          <FriendName>{name}</FriendName>
        </FriendsCard>
      ))}
    </Friendslist>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
