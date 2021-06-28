import PropTypes from 'prop-types';
import { Friendslist, FriendsCard, Online, Offline, FriendAvatar, FriendName } from './FriendsList.styles';
import friends from '../../data/friends.json';

export default function FriendsList() {
    return (
         <Friendslist>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsCard key={id}> 
                {isOnline ? <Online /> : <Offline />}
                <FriendAvatar
                    src={avatar}
                    alt={name}
                    width="75"/>
                <FriendName>{name}</FriendName>
          </FriendsCard>
        ))}
      </Friendslist>
  );
};
FriendsList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.node,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};