import axios from "axios";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
                console.log(response.data); //don't write string with response, it will show [object object];
                setFoodCart(response.data);
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
    }, []);

    return (
        <>
            {(!isFoodInCart) ? <p>"Hungry, add something to cart and order it."</p> : foodCart.forEach((element) => {
                
            })};
        </>
    )
}
export default Cart;