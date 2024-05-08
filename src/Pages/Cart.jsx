import { useSelector } from "react-redux"
import ExpandedProd from "../Components/ExpandedProducts/ExpandedProd"
import Button from "../Components/Utils/Button"

const Cart = () => {
  const {cart} = useSelector((state) => {
    return state.cartSlice
  })

  const cartContent = cart.map((cartProd) => {
    return <ExpandedProd key={cartProd.id} product={cartProd.product} />
})
  return (
    <div className="mt-8 mb-8 mr-6 ml-6 flex flex-col items-center gap-16">
      <h2 className="text-3xl font-extralight">Carts</h2>
      <div className="flex flex-col items-center gap-4">
        {cartContent}
      </div>
      <div className="w-full flex flex-row justify-end">
        <Button className="m-2 pl-10 pr-10 text-base font-extralight">Proceed to Buy  ( {cartContent.length} item )</Button>
      </div>
    </div>
  )
}

export default Cart
