import './index.scss';
import Group from './Group';

const Window = (props) => {
  const currentGroups = props.currentGroups;

  return (
    <div className="window">
      <div className="current-group-wrapper">
        <div className="current-group-list">
          <h2>Generated Groups</h2>
          {currentGroups.map((group, i) => {
            return <Group group={group} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Window;
