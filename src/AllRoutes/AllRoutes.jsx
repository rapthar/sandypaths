import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Hotel from "../Pages/Hotel";
import About from "../Pages/About";
import Advertising from "../Pages/Advertising";
import Privacy from "../Pages/Privacy";
import Terms from "../Pages/Terms";
import WriteForUs from "../Pages/WriteForUs";
import Sitemap from "../Pages/Sitemap";
import DataPrivacy from "../Pages/DataPrivacy";
import Cookies from "../Pages/Cookies";
import PersonalInfo from "../Pages/PersonalInfo";
import AdminDashboard from "../components/AdminDashboard";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/hotel" element={<Hotel />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/advertising" element={<Advertising />} ></Route>
        <Route path="/privacy" element={<Privacy />} ></Route>
        <Route path="/terms" element={<Terms />} ></Route>
        <Route path="/write-for-us" element={<WriteForUs />} ></Route>
        <Route path="/sitemap" element={<Sitemap />} ></Route>
        <Route path="/data-privacy" element={<DataPrivacy />} ></Route>
        <Route path="/cookies" element={<Cookies />} ></Route>
        <Route path="/personal-info" element={<PersonalInfo />} ></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />} ></Route>
    </Routes>
}

export default AllRoutes;