import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;