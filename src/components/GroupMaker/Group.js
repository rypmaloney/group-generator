import './index.scss';
import uniqid from 'uniqid';

const Group = (props) => {
  const { group, i } = props;
  return (
    <div className="group">
      {/* OL <p>{i + 1}.</p> */}
      {group.map((t) => {
        return (
          <div key={uniqid()} className="team-member">
            {t}
          </div>
        );
      })}
    </div>
  );
};

export default Group;
