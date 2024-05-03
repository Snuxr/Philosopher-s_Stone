import { faker } from "@faker-js/faker";
import Button from "../Utils/Button";
import Link from "../Utils/Link";
import { AddToCart, useAddToCartMutation } from "../../store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useNavigation from "../../Hooks/useNavigation";

const ProductOverview = ({ children, product }) => {
    const dispatch = useDispatch()
    const { navigate } = useNavigation()

    const [addToCart, results] = useAddToCartMutation()

    const handleCartClick = () => {
        addToCart({
            product,
            id: faker.string.uuid()
        })
    }

    useEffect(() => {
        if (!results.isError && results.isSuccess) {
            dispatch(AddToCart(results.data))
            navigate('/cart')
        }

    }, [dispatch, results.data])

    return (
        <div className="w-56 h-96 rounded-xl bg-gray-500 bg-opacity-30 backdrop-blur-2xl text-slate-300 flex flex-col justify-between">
            <Link to={`/products/${product.id}`}>
                <img className="w-prodImg h-prodImg rounded-t-xl" src={product.images[0]} />
                <div className="flex flex-col justify-start items-center pr-2 pl-2 pb-2">
                    <div className="flex flex-row justify-between items-baseline text-sm font-normal pt-1 pb-1 gap-1">
                        <div className="line-clamp-2 w-40 h-11">{children}</div>
                        <div className="justify-self-end">${product.price}.00</div>
                    </div>
                    <div className="font-thin text-xs line-clamp-2 h-8">
                        {product.description}
                    </div>
                </div>
            </Link>
            <div className="m-2 mb-3">
                <Button onClick={handleCartClick} className="justify-self-end font-light p-1 pt-2 pb-2 w-full">
                    Add To Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductOverview;