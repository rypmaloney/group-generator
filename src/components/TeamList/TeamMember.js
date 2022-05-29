const TeamMember = (props) => {
  const teamMember = props.teamMember;
  return (
    <div className="team-member">
      <p>{teamMember}</p>
      <div className="delete">x</div>
    </div>
  );
};

export default TeamMember;
