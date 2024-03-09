import { Link } from 'react-router-dom'


function Card({ head, lineUnderHead, route, imgSource }) {
    return (
        <>
            <div className="border-2 border-black-300 w-1/4 rounded-xl m-3"
            >
                <Link to={route}>
                    <img
                        className="w-full h-3/4 rounded-t-xl"
                        src={imgSource}
                        alt={`Image for ${head}`} />
                    <p
                        className="text-lg ml-3 font-semibold">
                        {head}
                    </p>
                    <p
                        className="ml-3">
                        {lineUnderHead}
                    </p>
                </Link>
            </div>
        </>
    )
}
export default Card;