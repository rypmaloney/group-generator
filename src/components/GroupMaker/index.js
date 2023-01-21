import './index.scss';
import { useEffect, useState } from 'react';
import PrevGroups from './PreviousGroups';
import { smallGroups } from '../../scripts/testGroups';
import Header from '../Header';
import Window from './Window';
import Controls from './Controls';
import { createUniqueFishyPairs } from '../../scripts/scoring/scoring';
import createLowScoreGroups from '../../scripts/createGroups/createGroups.js';
import { scoreGroups } from '../../scripts/scoring/scoring';

const GroupMaker = (props) => {
  const { team } = props;
  const [prevGroups, setPrevGroups] = useState(() => {
    const saved = localStorage.getItem('prevGroups');
    const initialValue = JSON.parse(saved);
    return initialValue || smallGroups;
  });
  const [currentGroups, setCurrentGroups] = useState(() => {
    const saved = localStorage.getItem('currentGroups');
    const initialValue = JSON.parse(saved);
    return initialValue || [[]];
  });
  const [groupCount, setGroupCount] = useState(() => {
    const saved = localStorage.getItem('groupCount');
    const initialValue = JSON.parse(saved);
    return initialValue || 3;
  });

  const [message, setMessage] = useState('');

  const createGroups = () => {
    let score = scoreGroups(prevGroups, createUniqueFishyPairs(team));
    const lowScoreGroups = createLowScoreGroups(team, groupCount, score);
    setCurrentGroups(lowScoreGroups);
  };

  useEffect(() => {
    localStorage.setItem('currentGroups', JSON.stringify(currentGroups));
    localStorage.setItem('prevGroups', JSON.stringify(prevGroups));
    localStorage.setItem('groupCount', JSON.stringify(groupCount));
  }, [currentGroups, prevGroups, groupCount]);

  const addToPrev = () => {
    let prev = [...prevGroups];
    for (let i = 0; i < currentGroups.length; i++) {
      prev.unshift(currentGroups[i]);
    }

    setPrevGroups(prev);
    setCurrentGroups([[]]);
  };

  return (
    <div className="group-maker">
      <Header />

      <p className="message">{message}</p>
      <Controls
        groupCount={groupCount}
        setGroupCount={setGroupCount}
        createGroups={createGroups}
        team={team}
        currentGroups={currentGroups}
        setMessage={setMessage}
        addToPrev={addToPrev}
      />
      <Window
        currentGroups={currentGroups}
        prevGroups={prevGroups}
        team={team}
        allowHoverbox={true}
      />
      <PrevGroups prevGroups={prevGroups} team={team} allowHoverbox={false} />
    </div>
  );
};

export default GroupMaker;
