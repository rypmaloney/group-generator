import './index.scss';
import uniqid from 'uniqid';
import GroupMember from './GroupMember';

const Group = (props) => {
  const { group, prevGroups, team, allowHoverbox } = props;
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
            allowHoverbox={allowHoverbox}
          />
        );
      })}
    </div>
  );
};

export default Group;
