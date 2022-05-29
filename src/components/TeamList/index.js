import TeamMember from './TeamMember';
import './index.scss';

const TeamList = (props) => {
  const team = props.team;
  return (
    <div className="team-list">
      <h2>Team List</h2>
      {team.map((t) => {
        return <TeamMember teamMember={t} />;
      })}
      <div className="team-add">
        <p>Add team member:</p>
        <input type="text"></input>
      </div>
    </div>
  );
};

export default TeamList;
