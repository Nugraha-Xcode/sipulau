import React, { useState } from "react";

const Checkbox = ({ value }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <label className='flex items-center gap-2 container'>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      {value}
    </label>
  );
};

export default Checkbox;
