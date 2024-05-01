import { Link } from "react-router-dom";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";
import { useState } from "react";

function Header() {
    const { loggedIn, changeLoggedIn, userId, changeUserId } = useOrdOrDel();

    const [isBurgerClicked, setIsBurgerClicked] = useState();

    const logOut = () => {
        if (confirm("You are being logged out.")) {
            changeLoggedIn(false);
            changeUserId("Guest");
            alert("You have been successfully logged out.");
            console.log("logged out");
        };
    };

    const onClickMenu = () => {
        setIsBurgerClicked(true);
        document.getElementById("menu-bar").classList.toggle("icon")
        document.getElementById("nav").classList.toggle("change")
    }

    return (
        <>
            {/* navbar */}
            <div id="navigation">
                <div id="menu-bar" className={(isBurgerClicked) ? "icon" : null} onClick={onClickMenu}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                <div className={(isBurgerClicked) ? "nav change" : "nav"} id="nav">

                    <Link to="/Zomiggy"
                        className="link">
                        <p>Home</p>
                    </Link>

                    <Link to="/Zomiggy/cart"
                        className="link">
                        <p>Cart</p>
                    </Link>

                    <Link to="/orders"
                        className="link">
                        <p>Orders</p>
                    </Link>


                    <Link to="/about"
                        className="link">
                        <p>About Us</p>
                    </Link>



                    <Link to="/forrestaurants"
                        className="link">
                        <p>For Restaurants</p>
                    </Link>

                    {
                        (!loggedIn) ?
                            <Link to="/Zomiggy/login"
                                className="link">
                                <p>Login</p>
                            </Link>
                            : null
                    }

                    {
                        (!loggedIn) ?
                            <Link to="/Zomiggy/signup"
                                className="link">
                                <p>Signin</p>
                            </Link>
                            :
                            null
                    }

                    {
                        (loggedIn) ? <Link className="link"
                            onClick={logOut}
                        >
                            <p>
                                Logout
                            </p>
                        </Link>
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default Header;