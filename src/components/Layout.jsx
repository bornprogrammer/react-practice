import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
    console.log("layout component rendered");
    return (
        <div>
            <Header></Header>
            {/* <Drawer></Drawer> */}
            <Footer></Footer>
            <Outlet />

        </div>
    )
}
export default Layout;