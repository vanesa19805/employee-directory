import React from "react";
import "./style.css";

// form for employee search
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Directory:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee-name"
          list="employee"
          type="text"
          className="form-control"
          placeholder="search name of the employee"
          id="employee"
        />
        {/* <datalist id="person">
          {props.employees.map(person => (
            <option value={person} key={person} />
          ))}
        </datalist> */}
      </div>
    </form>
  );
}

export default SearchForm;