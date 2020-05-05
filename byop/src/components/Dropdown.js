import React from "react";

export default function Dropdown({ label,options,cardfunc }) {

    function handleChange(e){
        console.log(label);
        console.log(e.target.value);
        cardfunc(label , e.target.value);
    }


  return (
    <label>
      {label} :
      <select name={label} id={label} onChange={handleChange} >
          <option value="select">Select...</option>
        {options.map(option => (
            <option value={option} key={option} >{option}</option>
        ))}
        
      </select>
    </label>
  );
}
