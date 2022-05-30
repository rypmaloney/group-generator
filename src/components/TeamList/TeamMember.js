const TeamMember = (props) => {
  const { teamMember, removeMember } = props;
  return (
    <div className="team-member">
      <p>{teamMember}</p>
      <div
        onClick={(e) => {
          removeMember(e.target.id);
        }}
        className="delete"
        id={teamMember}>
        x
      </div>
    </div>
  );
};

export default TeamMember;
