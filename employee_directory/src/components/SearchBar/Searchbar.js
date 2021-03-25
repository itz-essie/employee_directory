import React from "react";
import "./style.css";

function Searchbar(props) {
        return (
            <form className="search" >
                <div className="form-group text-center">
                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search Employee Name"
                        id="employee"
                    />
                    <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
                </div>
            </form >
        )
    };

export default Searchbar;