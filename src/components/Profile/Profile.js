import PropTypes from 'prop-types';
import Profilestats from '../Profile/Profilestats';
import {
  Profileinfo,
  Profiledesc,
  Profileimage,
  Profilename,
  Profiletag,
  Profilelocation,
} from '../Profile/Profile.styles';
// import { name, tag, location, avatar } from "../../data/user.json";

export default function Profile({ avatar, name, tag, location }) {
  return (
    <Profileinfo>
      <Profiledesc>
        <Profileimage src={avatar} alt="Аватар пользователя" />
        <Profilename>{name}</Profilename>
        <Profiletag>@{tag}</Profiletag>
        <Profilelocation>{location}</Profilelocation>
      </Profiledesc>
      <Profilestats />
    </Profileinfo>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
