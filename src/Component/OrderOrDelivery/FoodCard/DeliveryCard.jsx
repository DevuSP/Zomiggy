
function DeliveryCard({prop}) {
    return ( 
        <div className="w-[15rem] m-3 rounded-lg border-2 border-black">
            <div className="h-[11rem]">
                <img className="h-[11rem]" src={prop.image} alt={prop.dish} />
            </div>
            <div className="mt-5">
                <p>
                    {prop.dish}
                </p>
                <p>
                    {prop.rating}
                </p>
                <p>
                    {prop.price}
                </p>
                <p>
                    {prop.deliveryTime}
                </p>
            </div>
        </div>
    )
}

export default DeliveryCard;