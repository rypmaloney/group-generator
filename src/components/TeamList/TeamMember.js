const TeamMember = (props) => {
  const { teamMember, removeMember } = props;

  return (
    <div id={teamMember.name} className="team-member">
      <p>{teamMember.name}</p>

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
