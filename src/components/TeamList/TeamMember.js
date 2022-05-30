const TeamMember = (props) => {
  const { teamMember, removeMember } = props;

  const revealPairs = (e) => {};

  return (
    <div onMouseEnter={revealPairs} id={teamMember} className="team-member">
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
