import { Link } from 'react-router-dom'
import { useOrdOrDel } from '../../../Context/OrdOrDelContext';

function Card({ head, lineUnderHead, route, imgSource }) {
    const { changeValue } = useOrdOrDel();  //context

    const handleClick = () => {
        changeValue(route)
    }
    return (
        <>
            <div className="border-2 border-black-300 w-1/5 rounded-xl m-3 hover:border-slate-700 cursor-pointer p-1 pb-2" 
                // increase width below screen 1000 and so on.
            >
                <Link to={route} onClick={handleClick}>
                    <img
                        className="w-full h-2/3 rounded-t-xl"
                        src={imgSource}
                        alt={`Image for ${head}`} />
                    <i>
                        <p
                            className="text-lg ml-3 font-semibold">
                            {head}
                        </p>
                        <p
                            className="ml-3">
                            {lineUnderHead}
                        </p>
                    </i>
                </Link>
            </div>
        </>
    )
}
export default Card;