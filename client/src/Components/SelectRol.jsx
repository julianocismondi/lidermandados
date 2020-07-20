import React from 'react';

const SelectRol = props => {
    return ( 

        <div className="input-field col s12">
        <select defaultValue={props}>
          <option value={props} disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Multiple Select</label>
      </div>
    )
}
export default SelectRol;