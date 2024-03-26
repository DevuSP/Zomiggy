import SearchBar from "../Home/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";
import { data } from "autoprefixer";

function OrderOrDelivery() {
    const { ordOrDel, changeValue } = useOrdOrDel();
    const handleClickDining = (e) => {
        changeValue("/dining");
    }
    const handleClickOrder = () => {
        changeValue("/order")
    }

    const fetchingData = async () => {
        let url;
        if (ordOrDel === "/order") {
            url = "/JSON/Delivery.js";
        } else {
            url = "/JSON/Restuarants.js";
        }
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    fetchingData();
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
                        <Link className="mr-6 text-xl flex items-center w-40"
                            to="/dining"
                            onClick={handleClickDining}>
                            <img className="w-10 rounded-full mr-2"
                                src="images/delivery.png" alt="logo" />
                            Dining In
                        </Link>
                        <Link className="text-xl flex items-center w-40"
                            to="/order"
                            onClick={handleClickOrder}>
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
                        <div className="grid mt-10">
                            <p className="text-2xl">User is asking for {ordOrDel === "/dining" ? "Dining." : "Delivery."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderOrDelivery; 