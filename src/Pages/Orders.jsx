import Header from "../Components/Utils/Header"
import OrderData from "../Components/Utils/OrderData"
import Link from "../Components/Utils/Link"
import Line from "../Components/Utils/Line"
import { useSelector } from "react-redux"
import  Alert  from "../Components/Utils/Alert"

const Orders = () => {
  const { orders } = useSelector((state) => {
    return state.ordersSlice;
  })

  let content
  if(orders.length > 0) {
    content = orders.map((order) => {
      const dates = Date(order.order_placed).toString().split(' ')

      return (
        <div key={order.id} className=" flex flex-col bg-indigo-100 bg-opacity-10 p-3 rounded-xl">   
          <div className="flex flex-row justify-between items-center pr-2 pl-2 p-0.5">
            <OrderData data={`${dates[2]} ${dates[1]} ${dates[3]}`}>
              ORDER PLACED
            </OrderData>
            <OrderData data={`$${order.product.price}.00`}>
              TOTAL
            </OrderData>
            <OrderData data={order.id}>
              ORDER #
            </OrderData>
          </div>
          <Line className="m-2" />
          <Link to={`/products/${order.product.id}`} className="w-full max-h-52 flex flex-row gap-2 pr-5 pl-5">
            <img src={order.product.images[0]} className="max-w-48 max-h-48 rounded-sm shadow-full shadow-indigo-500/50" />
            <div className="flex flex-col justify-between pr-2 pl-2 ">
              <div to={`/products/${order.product.id}`} className="flex flex-col gap-2">
                <div className="text-gray-100 text-sm font-medium p-1">
                  {order.product.name}
                  <div className="line-clamp-3 text-gray-200 font-thin text-xs pt-2">
                    {order.product.description}
                  </div>
                </div>
              </div>
              <Line />
            </div>
          </Link>
        </div>
      )
    })
  } else {
    content = (
      <Alert>
        Looks like you did not place an order.
      </Alert>
    )
  }
  


  return (
    <div className="mt-8 mb-8 mr-6 ml-6 flex flex-col gap-16">
      <div className="flex flex-row justify-center items-center">
        <Header>Orders</Header>
      </div>
      <div className="flex flex-col mr-10 ml-10 gap-4">
        {content}
      </div>
    </div>
  )
}

export default Orders