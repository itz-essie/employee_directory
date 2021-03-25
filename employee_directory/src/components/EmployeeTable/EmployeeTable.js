import React from "react";

// loop through employee data in order to populate the data 
const EmployeeTable = (props) => {
    var employeeImg = props.employeeData[0]?.picture?.thumbnail;
    var imageurl = "https://randomuser.me/api/portraits/" + employeeImg
return(
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <th scope="row"> <img alt= {employeeImg} src={imageurl}/> </th>
      <td>{props.employeeData[0]?.name?.first}</td>
      <td>{props.employeeData[0]?.name?.last}</td>
      <td>{props.employeeData[0]?.phone}</td>
      <td>{props.employeeData[0]?.email}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
)
}

export default EmployeeTable;