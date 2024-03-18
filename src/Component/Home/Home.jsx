import { Link } from "react-router-dom";
import Card from "./Card/Card";
import SearchBar from "./SearchBar/SearchBar";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";

function Home() {
    const { ordOrDel } = useOrdOrDel();
    return (
        <>
            <div
                className="bg-cover bg-no-repeat flex flex-col rounded-b-xl"
                style={{ backgroundImage: `url('images/dishes.png')` }}>
                {/* Zomiggy */}
                <div
                    className="py-40 h-5/6 flex flex-col items-center">
                    <p className="text-5xl text-slate-200">zomiggy</p>
                    <p className="text-2xl text-slate-200 my-5">Find the best restaurants and cafes.</p>
                    <SearchBar />
                </div>
            </div>

            {/* Order online || dining in */}
            <div
                className="mt-9 flex flex-row justify-center w-full">

                {/* order online */}
                <Card
                    head="Order Online"
                    lineUnderHead="Order to your doorstep"
                    route="/order"
                    imgSource="images/Delivery.jpg" />

                {/* dining in */}
                <Card
                    head="Dining"
                    lineUnderHead="Dine in finest dining venues"
                    route="/dining"
                    imgSource="images/Dining.jpg" />

                <p>fdsf {ordOrDel }</p>
            </div>
        </>
    )
}

export default Home;