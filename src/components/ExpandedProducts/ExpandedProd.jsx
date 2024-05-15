import { useDispatch } from "react-redux"
import { AddToCart, DeleteCart, useAddToCartMutation, useDeleteCartMutation } from "../../store"
import Button from "../Utils/Button"
import Link from "../Utils/Link"
import { useEffect } from "react"
import { faker } from "@faker-js/faker"
import useNavigation from "../../Hooks/useNavigation"
import { MdClear } from "react-icons/md"

const ExpandedProd = ({ product, showBtn, cartBtn, cart_id }) => {
    const dispatch = useDispatch();
    const { navigate } = useNavigation();

    const newDates = new Date();
    newDates.setDate(newDates.getDate() + 3)
    let datesArr = newDates.toString().split(' ')

    const [addToCart, addToCartResults] = useAddToCartMutation()
    const [deleteCart, deleteCartResults] = useDeleteCartMutation()

    const handleCartClick = () => {
        addToCart({
            product,
            id: faker.string.uuid()
        })
    }

    const handleCartDelete = (cart_id) => {
        deleteCart(cart_id)
    }

    useEffect(() => {
        if (!addToCartResults.isError && addToCartResults.isSuccess) {
            dispatch(AddToCart(addToCartResults.data))
            navigate("/cart")
        }
    }, [dispatch, addToCartResults.data])

    
    useEffect(() => {
        if(!deleteCartResults.isError && deleteCartResults.isSuccess) {
            dispatch(DeleteCart(cart_id))
          }
    }, [dispatch, deleteCartResults.data])

    

    return (
        <div className="w-full max-h-72 flex flex-row gap-2">
            <Link to={`/products/${product.id}`}>
                <img src={product.images[0]} className="max-w-72 max-h-72 rounded-sm shadow-full shadow-indigo-500/50" />
            </Link>
            <div className="flex flex-col justify-between pr-2 pl-2 ">
                <Link to={`/products/${product.id}`} className="flex flex-col gap-2">
                    <div className="text-gray-100 text-lg font-semibold p-1">
                        {product.name}
                        <div className="line-clamp-2 text-gray-200 font-thin text-xs pt-2">
                            {product.description}
                        </div>
                    </div>
                    <div className="text-lg p-1 tracking-wider">${product.price}.00</div>
                    <div className="flex flex-row text-gray-200 text-xs p-1 gap-1">
                        Free Delivery
                        <div className="text-gray-100 text-xs font-semibold">{datesArr[0]}, {datesArr[2]} {datesArr[1]}</div>
                    </div>
                </Link>
                {
                    showBtn &&
                    <div className="flex flex-row justify-end items-center gap-4 p-1 mr-4 ml-4">
                        {
                            cartBtn ?
                                <Button onClick={() => handleCartDelete(cart_id)} className="px-6">Remove<MdClear className="text-xl" /></Button> :
                                <Button onClick={handleCartClick} className="px-6">ADD TO CART</Button>
                        }
                        {/* <Button className="pr-6 pl-6">BUY NOW</Button> */}
                    </div>
                }
                <div className="shadow-full shadow-indigo-500/50">
                    <hr className="border-opacity-70 border-gray-700" />
                </div>
            </div>
        </div>
    )
}

export default ExpandedProd;