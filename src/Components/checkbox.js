import React from 'react';

const Checkbox = ({ id, handleUserSelect }) => {
    const [value, setValue] = React.useState(!true);
    const handleChange = () => {
        setValue(!value);
        handleUserSelect(id);
    }
    return (
      <div>
        <input 
          id={id} 
          type="checkbox" 
          checked={value} 
          onChange={handleChange} 
        />
      </div>
    );
  };
  
  export default Checkbox;