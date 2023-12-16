import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const NavAdd = () => {
    return (
        <div >
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default NavAdd;