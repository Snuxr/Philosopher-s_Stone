import { useSelector } from "react-redux"
import ExpandedProd from "../Components/ExpandedProducts/ExpandedProd"
import Button from "../Components/Utils/Button"
import Header from "../Components/Utils/Header"
import { useDeleteCartMutation } from "../store"

const Cart = () => {
  const { cart } = useSelector((state) => {
    return state.cartSlice
  })
  const [deleteCart, results] = useDeleteCartMutation()
  
  const handleCartDelete = (cart_id) => {
    deleteCart(cart_id)
  }
  if(results.isSuccess) {
    console.log(results)
  }

  const cartContent = cart.map((cartProd) => {
    return <ExpandedProd key={cartProd.id} product={cartProd.product} showBtn={true} cartBtn={true} cartDelete={handleCartDelete} cart_id={cartProd.id} />
  })
  return (
    <div className="mt-8 mb-8 mr-6 ml-6 flex flex-col items-center gap-16">
      <Header>Cart</Header>
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
