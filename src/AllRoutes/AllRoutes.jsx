import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Hotel from "../Pages/Hotel";
import About from "../Pages/About";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/hotel" element={<Hotel />} ></Route>
        <Route path="/about" element={<About />} ></Route>
    </Routes>
}

export default AllRoutes;