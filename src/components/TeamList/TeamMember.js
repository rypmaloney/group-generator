const TeamMember = (props) => {
  const teamMember = props.teamMember;
  return (
    <div className="team-member">
      <p>{teamMember}</p>
    </div>
  );
};

export default TeamMember;
