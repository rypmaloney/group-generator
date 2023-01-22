import './index.scss';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';
const HoverBox = (props) => {
  const { member, groupPairScores, attribubtePairScores } = props;
  const [avg, setAvg] = useState(0);
  const [attAvg, setAttAvg] = useState(0);

  const calculateAvg = (group, att = false) => {
    let total = 0;
    for (let i = 0; i < group.length; i++) {
      total += group[i].score;
    }

    let groupAvg = total / group.length;
    let rounded = Math.round(100 * groupAvg) / 100;
    if (att) {
      setAttAvg(rounded);
    } else {
      setAvg(rounded);
    }
  };

  useEffect(() => {
    calculateAvg(groupPairScores);
    calculateAvg(attribubtePairScores, true);
  }, [groupPairScores, attribubtePairScores]);

  return (
    <div className="hover-box">
      <p className="highlight">{member}&apos;s Pairs:</p>
      {groupPairScores.map((gp) => {
        return (
          <p key={uniqid()}>
            {gp.pairee}: {gp.score} time{gp.score != 1 ? 's' : ''}
          </p>
        );
      })}
      <p className="highlight">Avg: {avg}</p>
      <hr></hr>
      <p>
        <strong>With attribute multiplier:</strong>
      </p>
      {attribubtePairScores.map((gp) => {
        return (
          <p key={uniqid()}>
            {gp.pairee}: {gp.score}
          </p>
        );
      })}
      <p className="highlight">Avg: {attAvg}</p>
    </div>
  );
};

export default HoverBox;
