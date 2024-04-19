const   ProductOverview = ({ children, product }) => {
    return (
        <div className="w-56 h-96 rounded-xl bg-gray-500 bg-opacity-30 backdrop-blur-2xl text-slate-300 ">
            <img className="rounded-t-xl" src={product.images[0]} />
            <div className="flex flex-col justify-center items-start pr-2 pl-2 pb-2">
                <div className="flex flex-row justify-between items-start text-sm font-normal pt-1 pb-1 gap-1">
                    <div className="line-clamp-2">{children}</div>
                    <div className="justify-self-end">${product.price}.00</div>
                </div>
                <div className="font-thin text-xs line-clamp-3 ">
                    {product.description}
                </div>
                <button className="self-center font-light text-sm text-slate-300 rounded-lg mt-4 m-1 p-1.5 w-full bg-white bg-opacity-10 hover:bg-opacity-90 hover:text-gray-950 hover:shadow-full hover:shadow-indigo-500/50 ">
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default ProductOverview;