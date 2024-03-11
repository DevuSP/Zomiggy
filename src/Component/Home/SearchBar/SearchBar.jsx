function SearchBar() {
    return (
        <div className="bg-white p-2 rounded-lg border-2 border-slate-200 shadow-lg h-12">
            <label>&#x1F50E;
                <input
                    className="border-black border-r-2 ml-1 focus:outline-none w-[15rem] "
                    type="text"
                    placeholder="City"
                    spellCheck="false"
                />
            </label>
            <input
                className="ml-1 focus:outline-none w-[15rem]"
                type="text"
                placeholder="Restaurant or dish"
                spellCheck="false"
            />
        </div>
    )
}

export default SearchBar;