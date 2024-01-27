import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch, Location } = useContext(AppContext);
  const [isSelectVisible, setSelectVisible] = useState(false);
  const selectRef = useRef(null);

  const optionLabel = (symbol) => {
    if (symbol === '$') {
      return '$ Dollar';
    } else if (symbol === '£') {
      return '£ Pound';
    } else if (symbol === '€') {
      return '€ Euro';
    } else if (symbol === '₹') {
      return '₹ Ruppee';
    }
  };

  const handleLabelClick = () => {
    setSelectVisible(!isSelectVisible);
  };

  const changeCurrency = (event) => {
    setSelectVisible(false);
    dispatch({
      type: 'CHG_LOCATION',
      payload: event.target.value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <div style={{display: 'flex'}}><label
        htmlFor="currency-select"
        style={{ border: 'none', backgroundColor: 'lightgreen', color: 'white', cursor: 'pointer' }}
        onClick={handleLabelClick}
      >
        Currency ({optionLabel(Location)})
      </label>
      <select
        style={{ display: isSelectVisible ? 'block' : 'none' }}
        id="currency-select"
        defaultValue={'£'}
        onChange={(event) => changeCurrency(event)}
        ref={selectRef}
      >
        <option value="$" name="$">
          $ Dollar
        </option>
        <option value="£" name="£">
          £ Pound
        </option>
        <option value="€" name="€">
          € Euro
        </option>
        <option value="₹" name="₹">
          ₹ Ruppee
        </option>
      </select>
      </div>
    </div>
  );
};

export default Currency;
