import { Link } from 'react-router-dom'
import { useOrdOrDel } from '../../../Context/OrdOrDelContext';

function Card({ head, lineUnderHead, route, imgSource }) {
    const { changeValue } = useOrdOrDel();  //context

    const handleClick = () => {
        changeValue((prev)=>{
            return route;
        });
        console.log(`route ${route}`);
    }
    return (
        <>
            <div className="border-2 border-black-300 w-1/5 rounded-xl m-3"
            >
                <Link to={route} onClick={handleClick}>
                    <img
                        className="w-full h-2/3 rounded-t-xl"
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