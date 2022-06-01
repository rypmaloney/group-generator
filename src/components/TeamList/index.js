import TeamMember from './TeamMember';
import './index.scss';
import { useState } from 'react';

const TeamList = (props) => {
  const { team, setTeam } = props;
  const [newMember, setNewMember] = useState('');

  const removeMember = (member) => {
    let newTeam = team.filter((t) => {
      return t !== member;
    });
    setTeam(newTeam);
  };

  const addMember = (e) => {
    e.preventDefault();
    if (newMember.length > 1) {
      let newTeam = [...team];
      newTeam.push(newMember);
      setTeam(newTeam);
      setNewMember('');
    }
  };

  return (
    <div className="team-list">
      <h2>Team List</h2>
      {team.map((t) => {
        return <TeamMember teamMember={t} key={t} removeMember={removeMember} />;
      })}
      <form className="team-add" onSubmit={addMember}>
        <p>
          <strong>Add Team Member:</strong>
        </p>
        <input
          type="text"
          onChange={(e) => {
            setNewMember(e.target.value);
          }}
          value={newMember}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TeamList;
