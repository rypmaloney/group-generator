import './index.scss';
import Group from './Group';

const PrevGroups = (props) => {
  const prevGroups = props.prevGroups;
  return (
    <div className="prev-group-list">
      <h2>Previous Groups</h2>
      {console.log(prevGroups[0])}
      {prevGroups[0].map((group) => {
        return <Group group={group} />;
      })}
    </div>
  );
};

export default PrevGroups;
