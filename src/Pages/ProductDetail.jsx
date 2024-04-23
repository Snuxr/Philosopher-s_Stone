import CategoryList from "../Components/Categories/CategoryList";
import ProductSlider from "../Components/Utils/ProductSlider";

const ProductDetail = ({ product }) => {
    return (
        <div className="mt-8 mb-8 mr-6 ml-6 flex flex-col items-center gap-16">
            <CategoryList />
            <div className="grid grid-cols-9 gap-36">
                <div className="rounded-3xl w-mainImg h-mainImg shadow-full shadow-indigo-500/50 col-span-3">
                    <ProductSlider data={product.images} />
                </div>
                <div className="flex flex-col justify-between pr-2 pl-2 col-span-6">
                    <div className="flex flex-col gap-6">
                        <div className="text-slate-300 text-3xl font-extralight p-1 gap-6">
                            {product.name}
                            <div className=" w-cover text-slate-400 font-extralight text-sm pt-5">
                                {product.description}
                            </div>
                        </div>
                        <div className="text-2xl p-1 tracking-wider">${product.price}.00</div>
                    </div>
                    <div className="shadow-full shadow-indigo-500/50">
                        <hr className="border-opacity-70 border-gray-700" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
