import axios from "axios"
import { useNavigate } from "react-router-dom";
import { User } from "../../../../server/models/Users";


function CardForCart({ prop }) {
    const itemId = prop.itemId;
    const image = prop.image;
    const dish = prop.dish;
    const rating = prop.rating;
    const price = prop.price;
    const deliveryTime = prop.deliveryTime;
    const navigate = useNavigate();

    const handleRemove = async () => {
        try{
            const response = await User.findOneAndDelete({itemId}, )
        }catch{

        }
    }
    return (
        <div className="w-[16rem] m-[1rem] rounded-lg border-2 hover:shadow-xl hover:border-slate-700"
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
            <div className="flex justify-center items-center">
                <button className=" w-[90%] p-2 bg-slate-600 text-white hover:bg-slate-400 rounded-md"
                >
                    Order
                </button>
            </div>
            <div className="my-4 flex justify-center items-center">
                <button className="w-[90%] p-2 bg-slate-600 text-white hover:bg-slate-400 rounded-md"
                    onClick={handleRemove}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CardForCart;