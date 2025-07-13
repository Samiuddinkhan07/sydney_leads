import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Layout = () =>{

    return (
    <>
        <div className="flex flex-col h-screen relative">
                <Navbar/>
            <div className="flex-1">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </>
    )
}

export default Layout