import React, { Component } from "react";
import ".style.css";
import Searchbar from "../SearchBar/Searchbar";

class Jumbotron extends Component {
render() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Employee Directory</h1>
        <p class="lead">
          Looking for an employee's contact information? Begin by typing first couple letters of employee's name, in search field. Click the table header to toggle names in ascending/descending order.
        </p>
      </div>
      <Searchbar handler = {this.props.handler} />
    </div>
  )
};
};

  

export default Jumbotron;