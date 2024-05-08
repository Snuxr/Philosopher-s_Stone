const OrderData = ({children, data}) => {
    return (
        <div className="flex flex-col justify-between items-center text-sm font-light">
            {children}
            <div className="text-gray-100 text-xs font-light">
                {data}
            </div>
        </div>
    )
}

export default OrderData;