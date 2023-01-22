import TeamMember from './TeamMember';
import './index.scss';
import { useState } from 'react';

const TeamList = (props) => {
  const { team, setTeam, attributes } = props;
  const [newMember, setNewMember] = useState('');
  const [inputValues, setInputValues] = useState({});
  const keyArray = attributes.map((a) => a.title);

  function handleChange(event) {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  }

  const removeMember = (member) => {
    console.log(team);
    let newTeam = team.filter((t) => {
      return t.name !== member;
    });
    setTeam(newTeam);
  };

  const addMember = (e) => {
    e.preventDefault();
    if (newMember.length > 1) {
      let newTeam = [...team];
      let newMemberObj = { name: newMember };
      let valuesObject = {};
      keyArray.forEach((key) => (valuesObject[key] = inputValues[key]));
      newMemberObj['attributes'] = valuesObject;

      newTeam.push(newMemberObj);
      setTeam(newTeam);
      setNewMember('');
      console.log(newTeam);
    }
  };

  return (
    <div className="team-list">
      <h2>Attributes</h2>
      {attributes.map((attr) => {
        return <p key={attr.title}>{attr.title}</p>;
      })}
      <h2>Team List</h2>
      {team.map((t) => {
        return <TeamMember teamMember={t} key={t.name} removeMember={removeMember} />;
      })}
      <form className="team-add" onSubmit={addMember}>
        <p>
          <strong>Add Team Member:</strong>
        </p>
        <p>Name:</p>
        <input
          type="text"
          onChange={(e) => {
            setNewMember(e.target.value);
          }}
          value={newMember}></input>
        {keyArray.map((key, index) => (
          <div key={index}>
            <label>{key}</label>
            <input type="text" name={key} onChange={handleChange} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TeamList;
