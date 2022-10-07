import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/store';

const FilerChange = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <label>
        <input
          type="text"
          name="filter"
          placeholder="Search Name"
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </label>
    </>
  );
};

export default FilerChange;
