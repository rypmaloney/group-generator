import './index.scss';
import Group from './Group';

const PrevGroups = (props) => {
  const prevGroups = props.prevGroups;
  return (
    <div className="prev-group-wrapper">
      <div className="prev-group-list">
        <h2>Previous Groups</h2>
        {prevGroups.map((group, i) => {
          return <Group group={group} i={i} />;
        })}
      </div>
    </div>
  );
};

export default PrevGroups;
