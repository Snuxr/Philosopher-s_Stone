import { FaMeta } from "react-icons/fa6";

const GadgetOverview = ({ product }) => {
    return (
        <div className="grid grid-cols-2 gap-4 m-6">
            <div key={product?.id} className="font-extralight text-xl border-none outline-none" >
                <img className="select-none border-none outline-none rounded-3xl" src={product?.link} alt={product?.name} />
                <div className={`relative bottom-10 right-10 flex flex-row justify-end items-center gap-2 text-lg p-1 ${product?.id == 4 || product?.id == 5 ? 'text-gray-900' : 'text-gray-100' }`}>
                    {product?.id === 1 ? <FaMeta /> : ' '}
                    {product?.name}
                </div>
            </div>
            <div className={`flex flex-col justify-start text-lg p-1 text-gray-100 font-light`}>
                <div className="flex flex-row items-center">
                    {product?.description}
                </div>
                <div className="flex flex-row items-center">
                    $ {product?.price}
                </div>
            </div>
        </div>
    )
}

export default GadgetOverview; 