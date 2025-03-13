import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import { useEffect } from "react"

function App() {
    const navigate = useNavigate();

    useEffect(() => {
      console.log('Testing')
      navigate("/");
    }, [])
    
    return <>
        Testing
    </>;
}

export default App;