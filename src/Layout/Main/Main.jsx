import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default Main;