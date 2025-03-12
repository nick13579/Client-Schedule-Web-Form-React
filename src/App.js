import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import { useEffect } from "react"

function App() {
    const navigate = useNavigate();

    useEffect(() => {
      navigate("/");
    }, [])
    
    return <>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </>;
}

export default App;