import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = (props) => {
  const rowData = props.employeeData.map((info) => {
    return {
      age: info.dob.age, 
      image: <img alt={info.name.first} src={info.picture.medium} />,
      firstName: info.name.first,
      lastName: info.name.last,
      phoneNumber: info.phone,
      location: info.location.city + "," + info.location.state,
      email: info.email,
    };
  });

  const itsPopulated = rowData.length > 0;
  console.log({ rowData });

  const data = {
    columns: [
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 150,
      },
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 150,
      },
      {
        label: "First Name",
        field: "firstName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Last Name",
        field: "lastName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Phone Number",
        field: "phoneNumber",
        sort: "asc",
        width: 270,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 200,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 200,
      },
      
    ],
    rows: itsPopulated && rowData,
  };

  return <MDBDataTable striped bordered large data={data} />;
};

export default DatatablePage;
