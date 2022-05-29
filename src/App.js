import { useContext, useState } from 'react';
import { fishiesTeamList } from './scripts/testGroups';
import './App.scss';
import TeamList from './components/TeamList';
import GroupMaker from './components/GroupMaker';

function App() {
  const [team, setTeam] = useState(fishiesTeamList);
  return (
    <div className="App">
      <h1>Fishtank Grouper</h1>
      <main>
        <TeamList team={team} />
        <GroupMaker team={team} />
      </main>
    </div>
  );
}

export default App;
