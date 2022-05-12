import React, { useState } from "react";

import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubbmit = (e) => {
    e.preventDefault();
    setCategories((cats) => [...cats, inputValue]);
    setinputValue("");
  };

  return (
    <form onSubmit={handleSubbmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

