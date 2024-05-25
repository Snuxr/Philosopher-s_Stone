import { FaMeta } from "react-icons/fa6";
import Line from "../Components/Utils/Line";
import Button from "../Components/Utils/Button";

const GadgetOverview = ({ product }) => {
    const handleCartClick = () => {
    }

    const handleOrderClick = () => {
    }

    const newDates = new Date()
    newDates.setDate(newDates.getDate() + 3)
    const datesArr = newDates.toString().split(' ')

    return (
        <div className="grid grid-cols-2 gap-8 m-6">
            <div key={product?.id} className="font-extralight text-xl border-none outline-none" >
                <img className="select-none border-none outline-none rounded-3xl" src={product?.link} alt={product?.name} />
                <div className={`relative bottom-10 right-10 flex flex-row justify-end items-center gap-2 text-lg p-1 ${product?.id == 4 || product?.id == 5 ? 'text-gray-900' : 'text-gray-100'}`}>
                    {product?.id === 1 ? <FaMeta /> : ' '}
                    {product?.name}
                </div>
            </div>
            <div className={`flex flex-col justify-between text-lg p-1 text-gray-100 font-light gap-4`}>
                <div className="flex flex-col h-96 justify-between">
                    <div className="flex flex-col gap-6 justify-between">
                        <div className="text-slate-300 text-3xl font-extralight p-1 gap-6">
                            {product.name}
                            <div className="flex flex-row items-center w-cover text-slate-400 font-light text-base pt-5">
                                {product.description}
                            </div>
                        </div>
                        <div className="text-2xl p-1 tracking-wider">${product.price}</div>
                        <div className="flex flex-row text-gray-200 text-sm p-1 gap-1">
                            Free Delivery
                            <div className="text-gray-100 text-sm font-semibold">{datesArr[0]}, {datesArr[2]} {datesArr[1]}</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button onClick={handleCartClick} className="px-4">ADD TO CART</Button>
                        <Button onClick={handleOrderClick} className="px-4">Buy Now</Button>
                    </div>
                </div>
                <Line />
            </div>
        </div>
    )
}

export default GadgetOverview; 