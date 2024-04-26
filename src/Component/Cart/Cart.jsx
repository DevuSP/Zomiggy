import axios from "axios";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardForCart from "./Card/CardForCart";

function Cart() {
    const { userId, loggedIn } = useOrdOrDel("");
    const [foodCart, setFoodCart] = useState([]);
    const [isFoodInCart, setIsFoodInCart] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!loggedIn) {
            navigate("/Zomiggy/signup"); // never use navigate as soon as component renders, it should be used either after users click or inside a useEffect hook.
        }
        try {
            const foodInCart = async () => {
                const response = await axios.post("http://localhost:3000/Zomiggy/cart", { userId });
                setFoodCart(response.data); //don't write string with response, it will show [object object];
                if (response.data.length > 0) {
                    setIsFoodInCart(true);
                } else {
                    setIsFoodInCart(false);
                }
            }
            foodInCart();
        } catch (error) {
            console.log(error);
        }
       
    }, [foodCart]);

    return (
        <div className="flex flex-1 flex-col">
        <h1 className="text-3xl font-semibold mx-6 mt-8" >Your Cart</h1>
            {(!isFoodInCart) ?
                <div className="flex flex-col items-center justify-center w-full">
                    <p className="text-3xl text-slate-500 text-center">Your Cart is empty.</p>
                    <p className="text-3xl text-slate-500 text-center">"Add your favorite food to cart to order it whenever you want."</p>
                </div>
                :
                <div className="flex w-[90%] flex-wrap">
                    {foodCart.map((e, i) => {
                        return <CardForCart key={i} prop={e} />
                    })}
                </div>
            }
        </div>
    )
}
export default Cart;