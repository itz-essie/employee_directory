import React, {useEffect, useState} from "react";
import axios from "axios"
import DatatablePage from "../components/DatatablePage/DatatablePage";

const Employees = () => {
const [employees, setEmployees]= useState([]) 
    useEffect( () => {
        axios.get("https://randomuser.me/api/?results=200").then((results) =>{
        setEmployees(results.data.results) //rerender of the component...anytime you modify any state or props
        })
    }, [])
    return (
        <DatatablePage employeeData= {employees}/>
    )
}

export default Employees