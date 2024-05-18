import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Line from "../Utils/Line"
import useNavigation from "../../Hooks/useNavigation";
import { AiOutlineLoading } from "react-icons/ai";

const SearchInput = () => {
    const [query, setQuery] = useState('')
    const [showSearch, setShowSearch] = useState(true)
    const [showLoading, setShowLoading] = useState(false)

    const { navigate } = useNavigation()
    const { products } = useSelector(state => {
        return state.prodCateSlice
    })

    let filteredItems = useMemo(() => {
        return products.filter((product) => {
            if (query.length > 0) {
                return product?.name.toLowerCase().includes(query?.toLowerCase());
            }
        }
        )
    }, [products, query])

    const handleClick = (item) => {
        setQuery(item?.name);
        setShowSearch(false)
        setShowLoading(true)
        setTimeout(() => {
            navigate(`/products/${item?.id}`);
            setQuery('');
            setShowSearch(true)
            setShowLoading(false)
        }, 1000);
    }

    let content;
    if (filteredItems.length > 0) {
        content = filteredItems?.map((item) => {
            return (
                <div onClick={() => handleClick(item)} key={item.id} className="min-w-[25rem] z-10  text-white p-1 flex flex-col gap-0.5">
                    {item?.name}
                    <Line hrClassName={`border-gray-300`} />
                </div>
            )
        })
    }
    return (
        <div className="min-w-[30rem] flex flex-col justify-center items-center outline-none">
            <div className="w-full flex p-1 flex-row h-full justify-between items-center bg-gray-300 bg-opacity-15 rounded-full outline-none hover:shadow-full hover:shadow-indigo-500/50">
                <div className="flex flex-col items-center justify-center bg-transparent px-2 h-full rounded-r-full outline-none">
                    {showLoading ? <AiOutlineLoading className="animate-spin text-[#35C4F0]" /> : <CiSearch />}
                </div>
                <input
                    className="w-full h-full bg-transparent p-1 pr-2 outline-none rounded-l-full"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            {
                showSearch &&
                <div className="min-w-[25rem] absolute top-[4.55rem] max-h-72 z-10 bg-gray-800 text-gray-100 text-xs font-light p-2 bg-opacity-20 backdrop-blur-sm rounded-b-md overflow-auto overflow-y-scroll">
                    {content}
                </div>
            }
        </div>
    );
};

export default SearchInput;
