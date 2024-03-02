

function Home() {
    return (
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
                        <a href=""><p>Cart</p></a>
                        <a href=""><p>Add Restaurant</p></a>
                        <a href=""><p>Login</p></a>
                        <a href=""><p>Signin</p></a>
                    </div>
                </div>
            </div>

            {/* Zomiggy */}
            <div
                className="border-4 border-black py-40 h-5/6 flex flex-col items-center">
                <p className="text-5xl text-white">Zomiggy</p>
                <p className="text-2xl text-white my-5">Find the best restaurants and cafes.</p>
                <div>
                    <input className="border-r-2 " type="text" />
                    <input className="" type="text" />
                </div>
            </div>
        </div>
    )
}

export default Home;