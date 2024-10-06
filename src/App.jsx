import MoonPage from "./Moon"
import MarsPage from "./Mars";
import Home from "./Home";
import MarsDetails from "./MarsDetails";
import MoonDetails from "./MoonDetails";
import NotFound from "./404";
import "./App.css"
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mars" element={<MarsPage />} />
                    <Route path="/moon" element={<MoonPage />} />
                    <Route path="/marsPage" element={<MarsDetails />} />
                    <Route path="/moonPage" element={<MoonDetails />} />
                </Routes>
            </Router>
        </div>


    ) 
}

export default App

