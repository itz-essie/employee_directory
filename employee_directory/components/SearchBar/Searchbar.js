import React, { Component } from "react";
import "./style.css";

class Searchbar extends Component {
    render() {
        return (
            <form className="search" >
                <div className="form-group text-center">
                    <input
                        onChange={(e) => {
                            this.props.handler(e.target.value)
                        }}
                        onKeyPress={this.noEnter}
                        type="text"
                        className="form-control"
                        placeholder="Search Employee Name"
                        id="employee"
                    />
                </div>
            </form >
        )
    };
};

export default Searchbar;