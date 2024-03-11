import SearchBar from "../Home/SearchBar/SearchBar";
import { Link } from "react-router-dom";

function OrderOnline() {
    return (
        <>
            <div className="flex-1">

                {/* Search bar */}
                <div className="flex justify-center mt-4">
                    <p className="text-3xl text-black font-semibold mr-5">Zomiggy</p>
                    <SearchBar />
                </div>

                {/* Delivery or Dine In */}
                <div className="flex justify-center mt-10">
                    <div className="w-[50rem] flex">
                        <Link className="mr-6 text-xl flex items-center w-40" to="/dining">
                            <img className="w-10 rounded-full mr-2"
                                src="images/delivery.png" alt="logo" />
                            Dining In
                        </Link>
                        <Link className="text-xl flex items-center w-40" to="/order">
                            <img className="rounded-full w-[3.3rem] mr-2"
                                src="images/dinein.png" alt="logo" />
                            Delivery
                        </Link>
                    </div>
                </div>

                {/* Options for menu */}
                <div className="flex justify-center mt-5">
                    <div className="w-[50rem]">
                        <p className="text-2xl">Delivery Restuarants Near you</p>
                        <div className="grid">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderOnline;