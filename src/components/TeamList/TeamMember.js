const TeamMember = (props) => {
  const { teamMember, removeMember } = props;
  const attributesArray = Object.entries(teamMember.attributes);
  return (
    <div id={teamMember.name} className="team-member">
      <div>
        <p>{teamMember.name}</p>
        {attributesArray.map(([key, value]) => {
          return (
            <p className="attrs" key={key}>
              {key}: {value}
            </p>
          );
        })}
        <p></p>
      </div>
      <div
        onClick={(e) => {
          removeMember(e.target.id);
        }}
        className="delete"
        id={teamMember.name}>
        &times;
      </div>
    </div>
  );
};

export default TeamMember;
