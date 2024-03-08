import { Outlet } from "react-router-dom";
import {Header, Footer} from "./index"
function Layout () {
    return (
        <>
            <Header className="flex flex-col min-h-screen" />
            <Outlet className="flex-1"/>
            <Footer />
        </>
    )
}

export default Layout;