import Card from "./Card/Card";
import SearchBar from "./SearchBar/SearchBar";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";

function Home() {
    const { loggedIn } = useOrdOrDel();

    if (loggedIn) {
        history.pushState(null, null, location.href);
        history.back();
        history.forward();
        window.onpopstate = function () { history.go(1); } // 1 refreshes the page, 0 goes 1 page forward, -1 goes 1 page backward.
    }
    return (
        <div className="bg-violet-50/20">
            <div
                className="bg-cover bg-no-repeat flex flex-col rounded-b-xl"
                style={{ backgroundImage: `url('./Zomiggy/images/dishes.png')` }}>
                {/* Zomiggy */}
                <div
                    className="py-40 h-5/6 flex flex-col items-center">
                    <p className="text-5xl text-slate-200">
                        <i>zomiggy</i>
                    </p>
                    <p className="text-2xl text-slate-200 my-5">
                        <i>Find the best restaurants and cafes.</i>
                    </p>
                    <SearchBar />
                </div>
            </div>

            {/* Order online || dining in */}
            <div
                className="my-9 flex justify-center w-full flex-wrap">

                {/* order online */}
                <Card
                    head="Order Online"
                    lineUnderHead="Order to your doorstep"
                    route="/Zomiggy/order"
                    imgSource="./Zomiggy/images/Delivery.jpg" />

                {/* dining in */}
                <Card
                    head="Dining"
                    lineUnderHead="Dine in at the finest venues"
                    route="/Zomiggy/dining"
                    imgSource="./Zomiggy/images/Dining.jpg" />

            </div>
        </div>
    )
}

export default Home;