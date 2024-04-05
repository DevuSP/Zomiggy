
function RestuarantsCard({ prop }) {
    return (
        <div className="w-[16rem] m-[1rem] rounded-lg border-2 hover:shadow-xl hover:border-slate-700 cursor-pointer">
            <div className="h-[11rem]">
                <img className="h-[11rem] min-w-full p-1 rounded-lg" src={prop.image} alt={prop.name} />
            </div>
            <div className="mt-3 ml-3 mb-3">
                <p className="text-xl font-medium">
                    <i> {prop.name}</i>
                </p>
                <p>
                    <span className="fa fa-star">{/* star */}</span> <i>{prop.rating}</i>
                </p>
                <p>
                    <i>{prop.location}</i>
                </p>
            </div>
        </div>
    )
}

export default RestuarantsCard;