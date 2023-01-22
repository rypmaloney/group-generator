import { useEffect, useState } from 'react';
import { fishiesTeamList, fishiesTeamList_attr, presetAttributes } from './scripts/testGroups';
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

  const [attributes, setAttributes] = useState(() => {
    const saved = localStorage.getItem('attributes');
    const initialValue = JSON.parse(saved);
    return initialValue || presetAttributes;
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
        <TeamList team={team} setTeam={setTeam} attributes={attributes} />
        <GroupMaker team={team} attributes={attributes} setAttributes={setAttributes} />
      </main>
    </div>
  );
}

export default App;
