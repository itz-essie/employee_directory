import React from "react";
import Jumbotron from "./components/Header/Jumbotron";
import Employees from "./utils/API";


function App() {
    return (
        <div>
    <Jumbotron />
    <Employees />
    </div>
    )
}

export default App;