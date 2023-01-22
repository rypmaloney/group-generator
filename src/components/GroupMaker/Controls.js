import './index.scss';

const Controls = (props) => {
  let {
    groupCount,
    setGroupCount,
    createGroups,
    team,
    currentGroups,
    setMessage,
    addToPrev,
    attributes,
    setAttributes
  } = props;

  const incrementCount = () => {
    if (groupCount < team.length / 2) {
      let count = groupCount + 1;
      setGroupCount(count);
      setMessage(' ');
    } else {
      setMessage(
        `Team members will be alone in a group if you select more than ${Math.floor(
          team.length / 2
        )} groups.`
      );
    }
  };
  const decrementCount = () => {
    if (groupCount > 1) {
      let count = groupCount - 1;
      setGroupCount(count);
      setMessage(' ');
    } else {
      setMessage('You cannot have zero groups.');
    }
  };

  const handleChange = (index, event) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[index].weight = event.target.value;
    setAttributes(updatedAttributes);
    console.log(attributes);
  };

  return (
    <div className="controls">
      <div className="counter">
        <p>
          <strong>Attributes:</strong>
        </p>
        <form className="sliders-panel">
          {attributes.map((attribute, index) => (
            <div className="attribute" key={attribute.title}>
              <label>{attribute.title}</label>
              <input
                type="range"
                min="0"
                max="5"
                value={attribute.weight}
                className="slider"
                onChange={(event) => handleChange(index, event)}
              />
              <p>{attribute.weight}</p>
            </div>
          ))}
        </form>

        <p className="control-info">
          Select attrubute weight. A higher number will make it less likely for members with
          similart attributes to be put in the same group.
        </p>
      </div>
      <div className="counter">
        <p>
          <strong>Number of Groups:</strong>
        </p>
        <div className="highlight">{groupCount}</div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <button className="primary-btn" onClick={createGroups}>
        {currentGroups[0].length > 0 ? 'Create New Groups' : 'Generate Groups'}
      </button>
      {currentGroups[0].length > 0 ? <button onClick={addToPrev}>Save This Group</button> : <></>}
    </div>
  );
};

export default Controls;
