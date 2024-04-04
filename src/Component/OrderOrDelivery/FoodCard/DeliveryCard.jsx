
function DeliveryCard({prop}) {
    return ( 
        <div className="w-[16rem] m-[1rem] rounded-lg border-1 hover:shadow-xl hover:border-blue-100">
            <div className="h-[11rem]">
                <img className="h-[11rem] p-1 min-w-full rounded-lg" src={prop.image} alt={prop.dish} />
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