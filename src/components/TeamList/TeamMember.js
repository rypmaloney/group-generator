import { useState } from 'react';
import uniqid from 'uniqid';

const TeamMember = (props) => {
  const { teamMember, removeMember, team, setTeam } = props;
  const attributesArray = Object.entries(teamMember.attributes);
  const attributeKeys = Object.keys(teamMember.attributes);

  const [edited, setEdited] = useState('');
  const [editedAttributes, setEditedAttributes] = useState('');

  const handleEditAttribute = (key, value) => {
    let newEditAttributes = JSON.parse(JSON.stringify(editedAttributes));

    newEditAttributes[key] = value;
    setEditedAttributes(newEditAttributes);
  };
  const handleSave = (member) => {
    let tempTeam = [...team];
    tempTeam.map((member) => {
      if (member.name == edited) {
        member.attributes = editedAttributes;
      }
    });
    setTeam(tempTeam);
    setEdited('');
  };
  const handleCancel = () => {
    setEdited('');
  };

  return (
    <div id={teamMember.name} className="team-member">
      <div>
        <p>
          <strong>{teamMember.name}</strong>
        </p>
        {edited === teamMember.name ? (
          <>
            {attributesArray.map(([key, value]) => {
              return (
                <div key={key} className="field-row">
                  <p className="attrs">{key}: </p>
                  <input
                    type="text"
                    value={editedAttributes[key] || ''}
                    onChange={(e) => handleEditAttribute(key, e.target.value)}
                  />
                </div>
              );
            })}
            <button onClick={() => handleSave(teamMember.name)}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            {attributeKeys.map((key) => {
              return (
                <div key={uniqid()} className="row">
                  <p className="attrs" key={uniqid()}>
                    <strong>{key}:</strong>
                  </p>
                  <p className="attrs"> {teamMember.attributes[key]}</p>
                </div>
              );
            })}
          </>
        )}
        <p></p>
      </div>
      <div
        onClick={(e) => {
          setEdited(e.target.id);
          setEditedAttributes(teamMember.attributes);
        }}
        className="edit"
        id={teamMember.name}>
        &#9998;
      </div>
      <div
        onClick={(e) => {
          removeMember(e.target.id);
        }}
        className="delete"
        id={teamMember.name}>
        &times;
      </div>
    </div>
  );
};

export default TeamMember;
