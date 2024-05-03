import { faker  } from "@faker-js/faker"
import { MdErrorOutline } from "react-icons/md";
import CategoryList from "../Components/Categories/CategoryList";
import Button from "../Components/Utils/Button";
import ProductSlider from "../Components/Utils/ProductSlider";
import { useDispatch } from "react-redux";
import { useAddToCartMutation } from "../store";
import { useEffect } from "react";
import useNavigation from "../Hooks/useNavigation";
import { AddToCart } from "../store";

const ProductDetail = ({ product }) => {
    const dispatch = useDispatch()
    const { navigate } =useNavigation()

    const [addToCart, results] = useAddToCartMutation()
    
    const handleCartClick = () => {
        addToCart({
            product,
            id: faker.string.uuid()
        })
    }

    useEffect(() => {
        if(!results.isError && results.isSuccess) {
            dispatch(AddToCart(results.data))
            navigate('/cart')
        }

    },[dispatch, results.data])

    const newDates = new Date()
    newDates.setDate(newDates.getDate() + 3)
    const datesArr = newDates.toString().split(' ')

    let productContent;
    if (!product) {
        productContent = (
            <div className="w-full h-full flex flex-row justify-center items-center animate-pulse gap-1 text-xl text-slate-300 opacity-70">
                Something Went Wrong
                <MdErrorOutline className="text-xl" />
            </div>
        )
    } else if (product) {
        productContent = (
            <div className="grid grid-cols-9 gap-10 mb-20">
                <div className="col-span-3">
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
                        <div className="flex flex-row text-gray-200 text-sm p-1 gap-1">
                            Free Delivery
                            <div className="text-gray-100 text-sm font-semibold">{datesArr[0]}, {datesArr[2]} {datesArr[1]}</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button onClick={handleCartClick}>ADD TO CART</Button>
                        <Button>Buy Now</Button>
                    </div>
                    <div className="shadow-full shadow-indigo-500/50">
                        <hr className="border-opacity-70 border-gray-700" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-8 mb-8 mr-6 ml-6 flex flex-col items-center gap-16">
            <CategoryList />
            {productContent}
        </div>
    )
}

export default ProductDetail;
