import { useSelector } from "react-redux"
import ExpandedProd from "../Components/ExpandedProducts/ExpandedProd"
import Button from "../Components/Utils/Button"
import Header from "../Components/Utils/Header"
import BuyNowModal from "../Components/Utils/BuyNowModal"
import { useState } from "react"
import Alert from "../Components/Utils/Alert"
import Link from "../Components/Utils/Link"

const Cart = () => {
  const [showModal, setShowModal] = useState(false)
  const { cart } = useSelector((state) => {
    return state.cartSlice
  })

  const onClose = () => {
    setShowModal(false)
  }

  let cartContent;
  if(cart.length > 0) {
    cartContent = cart.map((cartProd) => {
      return <ExpandedProd key={cartProd.id} product={cartProd.product} showBtn={true} cartBtn={true} cart_id={cartProd.id} />
    })
  } else {
    cartContent = (
      <Alert>
        Cart is empty
      </Alert>
    )
  }

  const Modal = <BuyNowModal onClose={onClose} cart={cart} />

  return (
    <div className="mt-8 mb-8 mr-6 ml-6 flex flex-col items-center gap-16">
      <Header>Cart</Header> 
      {showModal && Modal}
      <div className="flex flex-col items-center gap-4">
        {cartContent}
      </div>
      <div className="w-full flex flex-row justify-end">
      {
        cart.length > 0 ?
        <Button onClick={() => setShowModal(true)} className="m-2 pl-10 pr-10 text-base font-extralight outline-none">Proceed to Buy  ( {cartContent.length} item )</Button>
        : <Link to='/'>
            <Button className="m-2 pl-10 pr-10 text-base font-extralight outline-none">Add Items</Button>
          </Link>
      }
      </div>
    </div>
  )
}

export default Cart
