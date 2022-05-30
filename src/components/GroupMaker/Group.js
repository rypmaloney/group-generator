import './index.scss';
import uniqid from 'uniqid';
import GroupMember from './GroupMember';

const Group = (props) => {
  const { group, prevGroups, team } = props;

  return (
    <div className="group">
      {/* OL <p>{i + 1}.</p> */}

      {group.map((t) => {
        return (
          <GroupMember
            member={t}
            key={uniqid()}
            prevGroups={prevGroups}
            team={team}
            group={group}
          />
        );
      })}
    </div>
  );
};

export default Group;
