import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index"
function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* provide all outlet with {'className="flex-1"'} */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;