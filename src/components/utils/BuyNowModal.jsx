import ReactDOM from "react-dom";
import Button from "./Button";
import Link from "./Link";
import { AddAllOrders, useCreateOrderMutation } from "../../store";
import { useEffect } from "react";
import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";
import useNavigation from "../../Hooks/useNavigation";

const BuyNowModal = ({ onClose, cart }) => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [])

  const [createOrder, results] = useCreateOrderMutation()

  const handleOrderClick = () => {
    productArray.forEach(product => {
      createOrder(product)
    })
  }
  useEffect(() => {
    if (!results.isError && results.isSuccess) {
      dispatch(AddAllOrders(productArray))
      navigate('/orders')
    }
  }, [dispatch, results.data])

  let sum = 0;
  let productArray = [];
  const showProduct = cart?.map((cartProd) => {
    sum += cartProd.product.price;

    productArray.push({
      product: cartProd.product,
      order_placed: Date.now(),
      id: faker.string.uuid()
    });

    return (
      <div key={cartProd.id} className="flex flex-row m-4 min-w-48">
        <Link to={`/products/${cartProd.product.id}`}>
          <img src={cartProd.product.images[0]} className="max-w-40 max-h-40 rounded-sm" />
        </Link>
        <Link to={`/products/${cartProd.product.id}`} className="flex flex-col gap-2 m-2 ml-4">
          <div className="text-gray-100 text-sm font-light">
            {cartProd.product.name}
            <div className="text-sm tracking-wider">${cartProd.product.price}.00</div>
          </div>
        </Link>
      </div>
    )
  })

  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 text-gray-100 w-full h-full flex flex-col justify-center items-center bg-gray-400 backdrop-blur-sm bg-opacity-5 ">
        <div className="flex flex-col justify-between w-[55%] h-[58%] inset-x-96  bg-gray-950 bg-opacity-50 rounded-2xl p-6 shadow-full shadow-gray-500/50">
          <div className="w-full h-[90%] overflow-auto overflow-y-scroll grid grid-cols-2 px-6 py-4 rounded-2xl bg-gray-400 bg-opacity-10">
            {showProduct}
          </div>
          <div className="m-4 flex flex-row justify-between gap-2 items-center">
            <div className="mx-2 px-8 text-sm">Total: {sum == 0 ? 0 : `$ ${sum}.00`}</div>
            <div className="flex flex-row justify-end gap-2 items-center">
              <Button onClick={onClose} className="mx-2 px-8">Cancle</Button>
              <Button onClick={handleOrderClick} className="mx-2 px-8">Order Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("modal-root")
  )
}

export default BuyNowModal;