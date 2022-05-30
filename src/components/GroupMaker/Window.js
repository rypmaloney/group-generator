import './index.scss';
import Group from './Group';
import uniqid from 'uniqid';

const Window = (props) => {
  const currentGroups = props.currentGroups;

  return (
    <div className="window">
      <div className="current-group-wrapper">
        <div className="current-group-list">
          <h2>Generated Groups</h2>
          {currentGroups.map((group, i) => {
            return <Group group={group} i={i} key={uniqid()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Window;