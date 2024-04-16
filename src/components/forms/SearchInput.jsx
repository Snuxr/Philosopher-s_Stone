import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        setValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-96 flex flex-row justify-between items-center bg-gray-300 bg-opacity-15 rounded-full hover:shadow-full hover:shadow-indigo-500/50">
                <input
                    className="w-full bg-transparent p-1 pl-5 outline-none rounded-l-full focus:border focus:border-indigo-500/50 "
                    placeholder="Search"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="bg-transparent p-2 pr-5 rounded-r-full outline-none focus:border focus:border-indigo-500/50">
                    <CiSearch/>
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
