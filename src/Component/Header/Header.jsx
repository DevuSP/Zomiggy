import { Link } from "react-router-dom";

function Header(){
    return (
        <>
           {/* navbar */}
           <div
                    className="flex justify-center text-white p-4">
                    <div
                        className="w-2/3">
                        <div
                            className="flex flex-row justify-end flex-nowrap space-x-12 text-xl">
                            <Link to=""><p>Cart</p></Link>
                            <Link to=""><p>Add Restaurant</p></Link>
                            <Link to=""><p>Login</p></Link>
                            <Link to=""><p>Signin</p></Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Header;