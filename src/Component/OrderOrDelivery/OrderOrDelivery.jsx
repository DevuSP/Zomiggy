import SearchBar from "../Home/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";
import DeliveryCard from "./FoodCard/DeliveryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import RestuarantsCard from "./FoodCard/RestuarantsCard";

function OrderOrDelivery() {
    const { ordOrDel, changeValue } = useOrdOrDel();
    console.log("ordOrDel " + ordOrDel);
    let url;
    const handleClickDining = () => {
        changeValue("/Zomiggy/dining");
    }
    const handleClickOrder = () => {
        changeValue("/Zomiggy/order");
    }

    if (ordOrDel === "/Zomiggy/order") {
        url = "/Zomiggy/JSON/Delivery.js";
    } else {
        url = "/Zomiggy/JSON/Restuarants.js";
    }

    let [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get(url);
                setData(res.data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [url]);


    return (
        <div className="bg-violet-50/20">
            <div className="flex-1">

                {/* Search bar */}
                <div className="flex justify-center mt-4 ml-8">
                    <p className="text-3xl text-black font-semibold mr-5"><Link to={"/Zomiggy"}> <i>Zomiggy</i></Link></p>
                    <SearchBar />
                </div>


                {/* Options for menu */}
                <div className="flex justify-center my-4">
                    <div className="w-[58rem]">

                        {/* Delivery or Dine In */}
                        <div className="flex my-5 ml-5 h-10">
                            <Link className={"mr-6 text-2xl flex items-center w-40 rounded-md hover:text-slate-600 hover:border-b-2" + (ordOrDel === "/Zomiggy/dining" ? " border-b-4 border-black shadow-lg" : "")}
                                to="/Zomiggy/dining"
                                onClick={handleClickDining}>
                                <img className="w-10 rounded-full mr-2"
                                    src="images/delivery.png" alt="logo" />
                                Dining In
                            </Link>
                            <Link className={"text-2xl flex items-center w-40 rounded-md hover:text-slate-600 hover:border-b-2" + (ordOrDel === "/Zomiggy/order" ? " border-b-4 border-black shadow-lg" : "")}
                                to="/Zomiggy/order"
                                onClick={handleClickOrder}>
                                <img className="rounded-full w-[3.3rem] mr-2"
                                    src="images/dinein.png" alt="logo" />
                                Delivery
                            </Link>
                        </div>

                        {/* Delivery or resturant card. */}
                        <p className="text-2xl ml-5 w-max">{ordOrDel === "/Zomiggy/dining" ? "Dine In" : "Delivery"} Restuarants Near you</p>
                        <div className="flex flex-wrap mt-5">
                            {
                                data.map((element, index) => {
                                    if (ordOrDel === "/Zomiggy/order") {
                                        return (
                                            <DeliveryCard key={index} prop={element} />
                                        )
                                    } else {
                                        return (
                                            <RestuarantsCard key={index} prop={element} />
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderOrDelivery; 