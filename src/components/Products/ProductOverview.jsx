const   ProductOverview = ({ children, product }) => {
    return (
        <div className="w-56 h-80 rounded-xl bg-gray-500 bg-opacity-30 backdrop-blur-2xl text-slate-300 ">
            <img className="rounded-t-xl" src={product.images[0]} />
            <div className="flex flex-col justify-center items-start pr-2 pl-2 pb-2 ">
                <div className="flex flex-row justify-between items-start text-sm font-normal pt-1 pb-1 gap-1">
                    <div className="line-clamp-2">{children}</div>
                    <div className="justify-self-end">${product.price}.00</div>
                </div>
                <div className="font-thin text-xs line-clamp-2 ">
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default ProductOverview;