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
            <form onSubmit={handleSubmit} className="w-96 flex flex-row justify-between items-center bg-gray-300 bg-opacity-15 border-none outline-none rounded-full">
                <input
                    className="w-full bg-transparent p-1 pl-3 border-none outline-none rounded-full"
                    placeholder="Search"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="bg-transparent p-1 pr-3">
                    <CiSearch />
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
