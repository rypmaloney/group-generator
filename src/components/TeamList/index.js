import TeamMember from './TeamMember';
import './index.scss';

const TeamList = () => {
  return (
    <div className="team-list">
      <h2>Team List</h2>
      <TeamMember />
      <TeamMember />
    </div>
  );
};

export default TeamList;
