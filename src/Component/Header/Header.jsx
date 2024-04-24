import { Link } from "react-router-dom";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";

function Header() {
    const { loggedIn, changeLoggedIn, userId, changeUserId } = useOrdOrDel();

    const logOut = () => {
        if (confirm("You are being logged out.")) {
            changeLoggedIn(false);
            changeUserId("Guest");
            alert("You have been successfully logged out.");
            console.log("logged out");
        };
    };

    return (
        <>
            {/* navbar */}
            <div
                className="flex justify-end bg-slate-700 text-slate-100 px-1 py-1">
                <div
                    className="w-2/3">
                    <div
                        className="flex flex-row justify-end flex-nowrap space-x-6 text-xl">
                        <Link to="/Zomiggy"
                            className="hover:underline p-2 rounded-md hover:bg-slate-600">
                            <p>Home</p>
                        </Link>
                        <Link to="/Zomiggy/cart"
                            className="hover:underline p-2 rounded-md hover:bg-slate-600 ">
                            <p>Cart</p>
                        </Link>
                        <Link to="/orders"
                            className="hover:underline p-2 rounded-md hover:bg-slate-600 ">
                            <p>Orders</p>
                        </Link>

                        {
                            (!loggedIn) ?
                                <Link to="/Zomiggy/login"
                                    className="hover:underline p-2 rounded-md hover:bg-slate-600">
                                    <p>Login</p>
                                </Link>
                                : null
                        }
                        {
                            (!loggedIn) ?
                                <Link to="/Zomiggy/signup"
                                    className="hover:underline p-2 rounded-md hover:bg-slate-600">
                                    <p>Signin</p>
                                </Link>
                                :
                                null
                        }
                        {
                            (loggedIn) ? <Link className="hover:underline p-2 rounded-md hover:bg-slate-600"
                                onClick={logOut}
                            >Logout</Link>
                                : null
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;