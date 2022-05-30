const TeamMember = (props) => {
  const { teamMember, removeMember } = props;

  return (
    <div id={teamMember} className="team-member">
      <p>{teamMember}</p>
      <div
        onClick={(e) => {
          removeMember(e.target.id);
        }}
        className="delete"
        id={teamMember}>
        &times;
      </div>
    </div>
  );
};

export default TeamMember;
