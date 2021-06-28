import { Container } from './Wrapper.styles';
import Profile from '../Profile/Profile';
import UploadStats from '../UploadStats/UploadStats'

export default function Wrapper() {
    return (
      <Container>
        <Profile></Profile>
        <UploadStats></UploadStats>
      </Container>
  );
}
