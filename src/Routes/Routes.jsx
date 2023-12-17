import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Registration/SignUp/SignUp";
import Login from "../Pages/Registration/LogIn/Login";
import AvailableHouse from "../Pages/AvailableHouse/AvailableHouse";
import AddNewHouse from "../Pages/AddHouse/AddNewHouse";
import AvailableHouseDetails from "../Pages/AvailableHouse/AvailableHouseDetails/AvailableHouseDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/allhouse',
                element: <AvailableHouse/>
            },
            {
                path: '/allhouse/:id',
                element: <AvailableHouseDetails/>
            },
            {
                path: '/addhouse',
                element: <AddNewHouse/>
            },
            
        ]
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]);

export default router;