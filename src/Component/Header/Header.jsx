import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            {/* navbar */}
            <div
                className="flex justify-end bg-zinc-800 text-slate-300 px-1 py-1">
                <div
                    className="w-2/3">
                    <div
                        className="flex flex-row justify-end flex-nowrap space-x-6 text-xl">
                        <Link to="/cart"
                            className="hover:underline p-2 rounded-lg hover:bg-slate-500 ">
                            <p>Cart</p>
                        </Link>
                        <Link to="/addrestaurant"
                            className="hover:underline p-2 rounded-lg hover:bg-slate-500">
                            <p>Add Restaurant</p>
                        </Link>
                        <Link to="/login"
                            className="hover:underline p-2 rounded-lg hover:bg-slate-500">
                            <p>Login</p>
                        </Link>
                        <Link to="/singin"
                            className="hover:underline p-2 rounded-lg hover:bg-slate-500">
                            <p>Signin</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;