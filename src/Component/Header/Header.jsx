import { Link } from "react-router-dom";

function Header() {
    return (
        <>      
            {/* navbar */}
            <div
                className="flex justify-end bg-slate-800 text-slate-300 px-4 py-2">
                <div
                    className="w-2/3">
                    <div
                        className="flex flex-row justify-end flex-nowrap space-x-12 text-xl">
                        <Link to="/cart"><p>Cart</p></Link>
                        <Link to="/addrestaurant"><p>Add Restaurant</p></Link>
                        <Link to="/login"><p>Login</p></Link>
                        <Link to="/singin"><p>Signin</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;