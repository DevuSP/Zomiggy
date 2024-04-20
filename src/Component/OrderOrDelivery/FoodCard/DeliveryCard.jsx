import axios from "axios"
import { useOrdOrDel } from "../../../Context/OrdOrDelContext";
import { useNavigate } from "react-router-dom";


function DeliveryCard({ prop }) {
    const image = prop.image;
    const dish = prop.dish;
    const rating = prop.rating;
    const price = prop.price;
    const deliveryTime = prop.deliveryTime;
    const { userId, loggedIn } = useOrdOrDel();
    const navigate = useNavigate();

    const handleClick = async () => {
        if (!loggedIn) {  //if guest send to login or return
            if (confirm("Please login to your account.")) {
                navigate("/Zomiggy/login");
            } else {
                alert("Sorry cannot add to cart until you have an account.");
            }
            console.log("logged in " + loggedIn);
        } else {
            if (confirm("Add to cart")) {
                try {
                    const response = await axios.post("http://localhost:3000/Zomiggy/deliverytocart", { image, dish, rating, price, deliveryTime, userId });
                    if (response.data) {
                        console.log("Added to Cart");
                    } else {
                        console.log(response.data);
                    }
                } catch (error) {

                }
            }
        }
    }
    return (
        <div className="w-[16rem] m-[1rem] rounded-lg border-2 hover:shadow-xl hover:border-slate-700 cursor-pointer"
            onClick={handleClick}
        >
            <div className="h-[11rem]">
                <img className="h-[11rem] p-1 min-w-full rounded-lg" src={image} alt={dish} />
            </div>
            <div className="mt-3 ml-3 mb-3">
                <i>
                    <p className="font-medium text-xl">
                        {dish}
                    </p>
                    <p>
                        <span className="fa fa-star"></span>  {rating}
                    </p>
                    <p>
                        Rs {price}
                    </p>
                    <p>
                        {deliveryTime} away
                    </p>
                </i>
            </div>
        </div>
    )
}

export default DeliveryCard;