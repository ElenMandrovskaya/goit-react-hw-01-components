import { name, tag, location, avatar } from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import { Container, StatsContainer } from '../src/components/Container/Container.styles';
import Profile from '../src/components/Profile/Profile';
import UploadStats from '../src/components/UploadStats/UploadStats';
import FriendsList from '../src/components/FriendsList/FriendsList';
import Transactions from '../src/components/Transactions/Transactions';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Profile avatar={avatar} name={name} tag={tag} location={location} />
        <StatsContainer>
          <UploadStats title="Upload stats" stats={statisticalData} />
          <UploadStats stats={statisticalData} />
        </StatsContainer>
        <FriendsList friends={friends} />
        <Transactions transactions={transactions} />
      </Container>
    </div>
  );
}

export default App;
