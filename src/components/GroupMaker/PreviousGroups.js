import './index.scss';
import Group from './Group';
import uniqid from 'uniqid';

const PrevGroups = (props) => {
  const prevGroups = props.prevGroups;
  return (
    <div className="prev-group-wrapper">
      <div className="prev-group-list">
        <h2>Previous Groups</h2>

        {prevGroups.map((group, i) => {
          return <Group group={group} i={i} key={uniqid()} />;
        })}
      </div>
    </div>
  );
};

export default PrevGroups;
