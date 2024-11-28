import React, { useState } from 'react';

const DropdownExample = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1>Select an option</h1>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">--Select an option--</option>
        <option value="Option 1">Chocolates</option>
        <option value="Option 2">Icecream</option>
        <option value="Option 3">Juices</option>
        <option value="Option 4">Snacks</option>
      </select>

      {selectedOption && (
        <div>
          <h2>You selected: {selectedOption}</h2>
        </div>
      )}
    </div>
  );
};

export default DropdownExample;