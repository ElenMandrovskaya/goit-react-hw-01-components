import { Container } from './Wrapper.styles';
import Profile from '../Profile/Profile';
import UploadStats from '../UploadStats/UploadStats';
import FriendsList from '../FriendsList/FriendsList';

export default function Wrapper() {
    return (
      <Container>
        <Profile></Profile>
        <UploadStats></UploadStats>
        <FriendsList></FriendsList>
      </Container>
  );
}
