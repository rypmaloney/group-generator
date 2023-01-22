import TeamMember from './TeamMember';
import './index.scss';
import { useState } from 'react';

const TeamList = (props) => {
  const { team, setTeam, attributes, setAttributes } = props;
  const [newMember, setNewMember] = useState('');
  const [inputValues, setInputValues] = useState({});
  const [newAttribute, setNewAttribute] = useState('');

  const keyArray = attributes.map((a) => a.title);

  const addAttrbute = (e) => {
    e.preventDefault();
    let newAttributeList = [...attributes];
    newAttributeList.push({ title: newAttribute, weight: 0 });
    setAttributes(newAttributeList);

    let cleanedTeam = [...team];
    cleanedTeam.map((member) => (member.attributes[newAttribute] = ''));
    setTeam(cleanedTeam);

    setNewAttribute('');
  };

  const removeAttribute = (attribute) => {
    let newAtts = attributes.filter((t) => {
      return t.title !== attribute;
    });
    let cleanedTeam = [...team];
    cleanedTeam.map((member) => delete member.attributes[attribute]);
    console.log(cleanedTeam);
    setTeam(cleanedTeam);
    setAttributes(newAtts);
  };

  const handleChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const removeMember = (member) => {
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
    }
  };

  return (
    <div className="team-list">
      <h2>Attributes</h2>
      {attributes.map((attr) => {
        return (
          <div className="team-member" key={attr.title}>
            <p>{attr.title}</p>{' '}
            <div
              onClick={(e) => {
                removeAttribute(e.target.id);
              }}
              className="delete"
              id={attr.title}>
              &times;
            </div>
          </div>
        );
      })}
      <form className="team-add" onSubmit={addAttrbute}>
        <p>
          <strong>Add Attribute:</strong>
        </p>
        <input
          type="text"
          onChange={(e) => {
            setNewAttribute(e.target.value);
          }}
          value={newAttribute}></input>
        <button type="submit">Submit</button>
      </form>
      <hr></hr>
      <h2>Team List</h2>
      {team.map((t) => {
        return (
          <TeamMember
            teamMember={t}
            key={t.name}
            removeMember={removeMember}
            team={team}
            setTeam={setTeam}
          />
        );
      })}
      <form className="team-add" onSubmit={addMember}>
        <p>
          <strong>Add Team Member:</strong>
        </p>
        <div className="field-row">
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => {
              setNewMember(e.target.value);
            }}
            value={newMember}></input>
        </div>
        {keyArray.map((key, index) => (
          <div className="field-row" key={index}>
            <label>{key}: </label>
            <input type="text" name={key} onChange={handleChange} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TeamList;
