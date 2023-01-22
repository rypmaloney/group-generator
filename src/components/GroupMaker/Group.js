import './index.scss';
import uniqid from 'uniqid';
import GroupMember from './GroupMember';
import { attributes } from '../../scripts/testGroups';

const Group = (props) => {
  const { group, prevGroups, team, allowHoverbox, attributes } = props;
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
            attributes={attributes}
          />
        );
      })}
    </div>
  );
};

export default Group;
