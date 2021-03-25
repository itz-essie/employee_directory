import React from "react";
import "./style.css";
// import Searchbar from "../SearchBar/Searchbar";

// By extending the React.Component class, Jumbotron inherits functionality from it
class Jumbotron extends React.Component {
render() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          Looking for an employee's contact information? Begin by typing first couple letters of employee's name, in search field. Click the table header to toggle names in ascending/descending order.
        </p>
      </div>
      {/* <Searchbar handler = {this.props.handler} /> */}
    </div>
  )
};
};

  

export default Jumbotron;