import './index.scss';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';
const HoverBox = (props) => {
  const { member, groupPairScores } = props;
  const [avg, setAvg] = useState(0);

  const calculateAvg = () => {
    let total = 0;
    for (let i = 0; i < groupPairScores.length; i++) {
      total += groupPairScores[i].score;
    }
    let groupAvg = total / groupPairScores.length;

    setAvg(groupAvg);
  };

  useEffect(() => {
    calculateAvg();
  }, [groupPairScores]);

  return (
    <div className="hover-box">
      <p className="highlight">{member}'s Pairs:</p>
      {groupPairScores.map((gp) => {
        return (
          <p key={uniqid()}>
            {gp.pairee}: {gp.score} times
          </p>
        );
      })}
      <p className="highlight">Avg: {avg}</p>
    </div>
  );
};

export default HoverBox;
