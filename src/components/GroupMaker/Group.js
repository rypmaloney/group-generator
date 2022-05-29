import './index.scss';

const Group = (props) => {
  const group = props.group;
  return (
    <div className="prev-group">
      {group.map((t) => {
        return <p>{t}</p>;
      })}
    </div>
  );
};

export default Group;
