const ExpandedProd = ({ product }) => {
    const newDates= new Date()
    newDates.setDate(newDates.getDate() + 3)
    let datesArr = newDates.toString().split(' ')

    return (
        <div className="w-full max-h-72 flex flex-row gap-2">
            <img src={product.images[0]} className="max-w-72 max-h-72 rounded-sm shadow-full shadow-indigo-500/50" />
            <div className="flex flex-col justify-between pr-2 pl-2 ">
                <div className="flex flex-col gap-2">
                    <div className="text-gray-100 text-lg font-semibold p-1">
                        {product.title}
                        <div className="line-clamp-2 text-gray-200 font-thin text-xs pt-2">
                            {product.description}
                        </div>
                    </div>
                    <div className="text-lg p-1 tracking-wider">${product.price}.00</div>
                    <div className="flex flex-row text-gray-200 text-xs p-1 gap-1">
                        Free Delivery 
                        <div className="text-gray-100 text-xs font-semibold">{datesArr[0]}, {datesArr[2]} {datesArr[1]}</div>
                    </div>
                </div>
                <div className="shadow-full shadow-indigo-500/50">

                <hr className="border-opacity-70 border-gray-700" />
                </div>
            </div>
        </div>
    )
}

export default ExpandedProd;