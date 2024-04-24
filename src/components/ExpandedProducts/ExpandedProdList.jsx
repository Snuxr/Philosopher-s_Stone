import { useSelector } from "react-redux";
import ExpandedProd from "./ExpandedProd"
import { MdErrorOutline } from "react-icons/md";

const ExpandedProdList = ({ category }) => {
    const { products } = useSelector((state) => {
        return state.prodCateSlice
    })
    let ExpandedProdContent;

    if (products.lenght === 0) {
        ExpandedProdContent = (
            <div className="w-full h-full flex flex-row justify-center items-center animate-pulse gap-1 text-xl text-slate-300 opacity-70">
                Something Went Wrong
                <MdErrorOutline className="text-xl" />
            </div>
        )
    } else if (products.lenght !== 0) {
        const filteredProducts = products?.filter((product) => {
            return product.title === category.title
        })

        ExpandedProdContent = filteredProducts.map((product) => {
            return <ExpandedProd key={product.id} product={product} />
        })

        if (ExpandedProdContent[0] === undefined) {
            ExpandedProdContent = (
                <div className="w-full h-full flex flex-row justify-center items-center animate-pulse gap-1 text-xl text-slate-300 opacity-70">
                    Something Went Wrong
                    <MdErrorOutline className="text-xl" />
                </div>
            )
        }
    }
    return (
        <div className="h-cover w-cover bg-indigo-600 p-6 bg-opacity-5 rounded-xl flex flex-col items-center">
            <div className="backdrop-blur-lg rounded-sm flex flex-col gap-2">
                {ExpandedProdContent}
            </div>
        </div>
    )
}

export default ExpandedProdList;