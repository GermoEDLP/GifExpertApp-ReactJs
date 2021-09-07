import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({handleAdd}) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    handleAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="hide">{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        name="category"
        placeholder="Add category"
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default AddCategory;
