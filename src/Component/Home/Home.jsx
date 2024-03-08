import Card from "./Card/Card";


function Home() {
    return (
        <>
            <div
                className="bg-cover bg-no-repeat flex flex-col rounded-b-xl"
                style={{ backgroundImage: `url('images/dishes.png')` }}>
                {/* Zomiggy */}
                <div
                    className="py-40 h-5/6 flex flex-col items-center">
                    <p className="text-5xl text-slate-200">Zomiggy</p>
                    <p className="text-2xl text-slate-200 my-5">Find the best restaurants and cafes.</p>
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
            className="mt-9 flex flex-row justify-center w-full">
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