import { Outlet } from "react-router-dom";
import {Footer} from './index'

function Layout () {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;