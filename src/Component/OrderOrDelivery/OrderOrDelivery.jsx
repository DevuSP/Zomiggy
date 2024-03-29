import SearchBar from "../Home/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";
import DeliveryCard from "./FoodCard/DeliveryCard";
import { useEffect, useState } from "react";
import axios from "axios";

function OrderOrDelivery() {
    const { ordOrDel, changeValue } = useOrdOrDel();
    const handleClickDining = () => {
        changeValue("/dining");
    }
    const handleClickOrder = () => {
        changeValue("/order");
    }

    let url;
    if (ordOrDel === "/order") {
        url = "/JSON/Delivery.js";
    } else {
        url = "/JSON/Restuarants.js";
    }

    let [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get(url);
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

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
                <div className="flex justify-center my-8">
                    <div className="w-[50rem]">
                        <p className="text-2xl">Delivery Restuarants Near you</p>
                        <div className="flex flex-wrap mt-10">
                            {
                                data.map((element, index)=>{
                                    return(
                                        <DeliveryCard id={index} prop={element} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderOrDelivery; 