import './index.scss';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';
const HoverBox = (props) => {
  const { member, groupPairScores, attribubtePairScores } = props;
  const [avg, setAvg] = useState(0);

  const calculateAvg = () => {
    let total = 0;
    for (let i = 0; i < groupPairScores.length; i++) {
      total += groupPairScores[i].score;
    }

    let groupAvg = total / groupPairScores.length;
    let rounded = Math.round(100 * groupAvg) / 100;

    setAvg(rounded);
  };

  useEffect(() => {
    calculateAvg();
  }, [groupPairScores]);

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
    </div>
  );
};

export default HoverBox;
