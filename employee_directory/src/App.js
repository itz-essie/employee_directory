import React, {useEffect, useState} from "react";
// useEffect is a named export (non default export)
import Jumbotron from "./components/Header/Jumbotron";
import axios from "axios";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";


function App() {
    // declaring a new state 
    //defining new state called employees, also have a function which allows us to set the data within the employees state
    const [employees, setEmployees]= useState([]) 
    useEffect( () => {
        axios.get("https://randomuser.me/api/?results=200").then((results) =>{
        setEmployees(results.data.results) //rerender of the component...anytime you modify any state or props
        })
    }, [])

    return (
        <div>
            {console.log(employees)}
    <Jumbotron />
    <EmployeeTable employeeData= {employees}/>
    </div>
    )
}

export default App;