import { Link } from 'react-router-dom'
import Card from "./Card/Card";


function Home() {
    return (
        <>
            <div
                className="w-100% h-full bg-cover bg-no-repeat flex flex-col pb-20"
                style={{ backgroundImage: `url('images/dishes.png')` }}>

                {/* navbar */}
                <div
                    className="flex justify-center text-white p-4">
                    <div
                        className="w-2/3">
                        <div
                            className="flex flex-row justify-end flex-nowrap space-x-12 text-xl">
                            <Link to=""><p>Cart</p></Link>
                            <Link to=""><p>Add Restaurant</p></Link>
                            <Link to=""><p>Login</p></Link>
                            <Link to=""><p>Signin</p></Link>
                        </div>
                    </div>
                </div>

                {/* Zomiggy */}
                <div
                    className="border-4 border-black py-40 h-5/6 flex flex-col items-center">
                    <p className="text-5xl text-white">Zomiggy</p>
                    <p className="text-2xl text-white my-5">Find the best restaurants and cafes.</p>
                    <div className="bg-white p-2 rounded-lg">
                        <label>&#x1F50E;
                            <input
                                className="border-black border-r-2 ml-1 focus:outline-none"
                                type="text"
                                placeholder="City"
                                spellCheck="false"
                            />
                        </label>
                        <input
                            className="ml-1 focus:outline-none"
                            type="text"
                            placeholder="Restaurant or dish"
                            spellCheck="false"
                        />
                    </div>
                </div>
            </div>

            {/* Order online || dining in */}
            <div 
            className="mt-9 flex flex-row justify-center border-2 h-68 w-full">
                    {/* order online */}
                    <Card 
                    head="Order Online" 
                    lineUnderHead="Order to your doorstep" 
                    route="" 
                    imgSource="images/Delivery.jpg" />
                    {/* dining in */}
                    <Card 
                    head="Dining" 
                    lineUnderHead="Dine in finest dining venues" 
                    route="" 
                    imgSource="images/Dining.avif" />
            </div>
        </>
    )
}

export default Home;