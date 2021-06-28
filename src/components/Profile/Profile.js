import PropTypes from 'prop-types';
import Profilestats from '../Profile/Profilestats';
import { Profileinfo, Profiledesc, Profileimage, Profilename, Profiletag, Profilelocation } from '../Profile/Profile.styles';
import { name, tag, location, avatar } from "../../data/user.json";

export default function Profile() {
    return (
        <Profileinfo>
            <Profiledesc>
                <Profileimage
                    src={avatar}
                    alt="Аватар пользователя"/>
                <Profilename>{name}</Profilename>
                <Profiletag>@{tag}</Profiletag>
                <Profilelocation>{location}</Profilelocation>
            </Profiledesc>
            <Profilestats></Profilestats>
        </Profileinfo>
  );
};

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.node,
};