import './index.scss';

const Group = (props) => {
  const { group, i } = props;
  return (
    <div className="group">
      <p>{i + 1}.</p>
      {group.map((t) => {
        return <div className="team-member">{t}</div>;
      })}
    </div>
  );
};

export default Group;
