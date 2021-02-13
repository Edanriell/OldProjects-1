import React from 'react';
import StyledButton from './StyledButton';
import './FlagChoices.css';

const FlagChoices =  props => {
  let options = props.options || []
  const {handleChange, handleSubmit} = props;
  let inputs = options.map(opt => (
    <label key={opt.id}>
      <div class="form-check form-check-inline mt-4">
        <input type="radio"
              value={opt.id}
              checked={opt.checked}
              onChange={handleChange}
              name="flag-choice"
              className="form-check-input" />
        {opt.name}
      </div>
    </label>
  ));

  return (
    <form className="flag-form" onSubmit={handleSubmit}>
      {inputs}
      <StyledButton text="GUESS" type="submit"/>
    </form>
  );
}

export default FlagChoices;