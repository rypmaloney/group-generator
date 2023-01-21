import './index.scss';
import Group from './Group';
import uniqid from 'uniqid';

const Window = (props) => {
  const { currentGroups, prevGroups, team, allowHoverbox } = props;

  return (
    <div className="window">
      <div className="current-group-wrapper">
        <div className="current-group-list">
          {currentGroups.map((group, i) => {
            return (
              <Group
                group={group}
                i={i}
                key={uniqid()}
                team={team}
                prevGroups={prevGroups}
                allowHoverbox={allowHoverbox}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Window;
