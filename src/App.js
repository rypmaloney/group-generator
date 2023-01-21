import { useEffect, useState } from 'react';
import { fishiesTeamList, fishiesTeamList_attr } from './scripts/testGroups';
import './App.scss';
import TeamList from './components/TeamList';
import GroupMaker from './components/GroupMaker';
import grouper from './img/grouper.png';

function App() {
  const [team, setTeam] = useState(() => {
    const saved = localStorage.getItem('team');
    const initialValue = JSON.parse(saved);
    return initialValue || fishiesTeamList_attr;
  });

  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team));
  }, [team]);

  return (
    <div className="App">
      <div className="title">
        <img className="grouper" src={grouper}></img>
        <h1>Grouper</h1>
      </div>
      <main>
        <TeamList team={team} setTeam={setTeam} />
        <GroupMaker team={team} />
      </main>
    </div>
  );
}

export default App;
