import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {
  var employeeImg = props.employeeData[0]?.picture?.thumbnail;
  var imageurl = "https://randomuser.me/api/portraits/" + employeeImg
  const data = {
    columns: [
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 150
      },
      {
        label: 'First Name',
        field: 'firstName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Last Name',
        field: 'lastName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Phone Number',
        field: 'phoneNumber',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
      {
        image: imageurl,
        firstName: props.employeeData[0]?.name?.first,
        lastName: props.employeeData[0]?.name?.last,
        phoneNumber: props.employeeData[0]?.phone,
       email: props.employeeData[0]?.email
      },
      {
        image: props.employeeData[1]?.picture?.thumbnail,
        firstName: props.employeeData[1]?.name?.first,
        lastName: props.employeeData[1]?.name?.last,
        phoneNumber: props.employeeData[1]?.phone,
       email: props.employeeData[1]?.email
      },
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;