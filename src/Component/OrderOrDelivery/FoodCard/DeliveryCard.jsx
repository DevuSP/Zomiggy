
function DeliveryCard({ prop }) {
    return (
        <div className="w-[16rem] m-[1rem] rounded-lg border-2 hover:shadow-xl hover:border-slate-700 cursor-pointer">
            <div className="h-[11rem]">
                <img className="h-[11rem] p-1 min-w-full rounded-lg" src={prop.image} alt={prop.dish} />
            </div>
            <div className="mt-3 ml-3 mb-3">
                <i>
                    <p className="font-medium text-xl">
                        {prop.dish}
                    </p>
                    <p>
                        <span className="fa fa-star"></span>  {prop.rating}
                    </p>
                    <p>
                        Rs {prop.price}
                    </p>
                    <p>
                        {prop.deliveryTime} away
                    </p>
                </i>
            </div>
        </div>
    )
}

export default DeliveryCard;