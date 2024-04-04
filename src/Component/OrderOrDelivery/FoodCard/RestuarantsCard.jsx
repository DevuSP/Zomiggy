
function RestuarantsCard({prop}) {
    return (
        <div className="w-[16rem] m-[1rem] rounded-lg border-1 hover:shadow-xl hover:border-blue-100">
            <div className="h-[11rem]">
                <img className="h-[11rem] min-w-full p-1 rounded-lg" src={prop.image} alt={prop.name} />
            </div>
            <div className="mt-5">
                <p>
                    {prop.name}
                </p>
                <p>
                    {prop.rating}
                </p>
                <p>
                    {prop.location}
                </p>
            </div>
        </div>
    )
}

export default RestuarantsCard;