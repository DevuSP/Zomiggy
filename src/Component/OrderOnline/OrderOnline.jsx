import SearchBar from "../Home/SearchBar/SearchBar";
import { Link } from "react-router-dom";

function OrderOnline() {
    return (
        <>
            <div className="flex-1">
                <div className="flex justify-center mt-4">
                    <p className="text-3xl text-black font-semibold mr-5">Zomiggy</p>
                    <SearchBar />
                </div>
                <div className="flex justify-center mt-4 ">
                <div className="w-[50rem]">
                    <Link className="w-24 ml-5 text-xl" to="/dining">Dining In</Link>
                    <Link className="w-24 ml-5 text-xl" to="/order">Delivery</Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default OrderOnline;