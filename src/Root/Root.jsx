import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
             <ToastContainer />
            <Navbar/>
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;