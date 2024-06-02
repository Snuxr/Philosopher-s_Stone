import { AiOutlineLoading } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAllOrders, AddManyProducts, AddToCartAll, useFetchCartQuery, useFetchOrderQuery, useFetchProductsQuery } from "./store";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ShowProducts from "./Pages/ShowProducts";
import Route from "./Components/Utils/Route"
import useNavigation from "./Hooks/useNavigation";
import binarySearch from "./Hooks/binarySearch";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import GadgetOverview from "./Pages/GadgetOverview";

// Banner Images
import imgL1 from "./Assets/Banner_images/imgL1.png"
import imgL2 from "./Assets/Banner_images/imgL2.png"
import imgL3 from "./Assets/Banner_images/imgL3.png"
import imgR1 from "./Assets/Banner_images/imgR1.png"
import imgR2 from "./Assets/Banner_images/imgR2.png"
import imgR3 from "./Assets/Banner_images/imgR3.png"

const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { categories, products } = useSelector((state) => {
    return state.prodCateSlice;
  })

  const { currPath, navigate } = useNavigation()

  const productsData = useFetchProductsQuery()
  const cartData = useFetchCartQuery()
  const orderData = useFetchOrderQuery()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);

    if (!productsData.isError && productsData.isSuccess) {
      dispatch(AddManyProducts(productsData.data))
    }

    return () => {
      clearTimeout(timer)
    }
  }, [dispatch, productsData.data, productsData.isError])

  useEffect(() => {
    if (!cartData.isError && cartData.isSuccess) {
      dispatch(AddToCartAll(cartData.data))
    }
  }, [dispatch, cartData.data, cartData.isError])

  useEffect(() => {
    if (!orderData.isError && orderData.isSuccess) {
      dispatch(AddAllOrders(orderData.data))
    }
  }, [dispatch, orderData.data, orderData.data])


  let categoryPath;
  let cateIndex;
  if (currPath.toLowerCase().includes('categories')) {

    const target = currPath.split('/')[2]
    const index = binarySearch(categories, target)

    if (index !== -1 && target && categories[index].title === target) {
      cateIndex = index
      categoryPath = currPath
    } else {
      navigate('/')
    }

  }

  let productPath;
  let productData;
  if (currPath.toLowerCase().includes('products')) {
    const productId = currPath.split('/')[2]

    products?.forEach((product) => {
      if (product.id === productId) {
        productData = product
      }
    })
    if (products.length !== 0 && productData === undefined) {
      navigate('/')
    }
    if (productId === productData?.id) {
      productPath = currPath
    }
  }

  const leftBanner_Data = [
    {
      id: "ea3dec5f-774c-4308-ad7a-3d2084b127ee",
      name: "Meta Quest 3",
      price: 499,
      description: "Meta Oculus Quest 3 Advanced All-in-One Virtual Reality Headset (128GB)",
      images: [imgL1],
      title: "Meta Quest 3",
    },
    {
      id:  "ffd83d53-6a86-4d42-8d3d-6cfdf3f6cff5",
      name: "Rabbit R1",
      price: 199,
      description: "Rabbit R1, your pocket companion",
      images: [imgL2],
      title: "R1. your pocket companion",
    },
    {
      id: "c074f250-06e7-49f0-926b-ee309c9f699a",
      name: "Samsung Galaxy S24 Ultra",
      price: 1300,
      description: "Samsung Galaxy S24 Ultra 5G AI Smartphone",
      images: [imgL3],
      title: "Samsung Galaxy S24 Ultra",
    },
  ]

  const rightBanner_Data = [
    {
      id: "f28aa0b3-7c27-47c7-a7e8-929262f58c04",
      name: "TP-7",
      price: 1359,
      description: "Intuitive muscle reflex control",
      images: [imgR1],
      title: "TP-7 field recorder",
    },
    {
      id: "7c71d2c0-e292-4b45-8432-a55a7a2b8c3a",
      name: "Galaxy Tab S9 Ultra",
      price: 1299,
      description: "Samsung Galaxy Tab S9 Ultra 36.99 cm (14.6 inch) Dynamic AMOLED 2X Display, RAM 12 GB, ROM 512 GB Expandable, S Pen in-Box, Wi-Fi Tablet, Gray",
      images: [imgR2],
      title: "Galaxy Tab S9 Ultra",
    },
    {
      id: "c6d4e65f-b526-4596-ac70-58d18530c160",
      name: "MacBook Pro M3 Pro",
      price: 1799,
      description: "Apple 2023 MacBook Pro (14-inch, M3 Pro chip with 11-core CPU and 14-core GPU, 18GB Unified Memory, 512GB) - Space Grey",
      images: [imgR3],
      title: "Apple the new MacBook Pro featuring the M3 family of chips, making the world's best pro laptop even better",
    },
  ]

  const allGadget = [...leftBanner_Data, ...rightBanner_Data];
  let gadgetData;
  let gadgetPath;
  if (currPath.toLowerCase().includes('gadgets')) {
    gadgetData = allGadget.filter((gadget) => {
      return gadget.id == currPath.split('/')[2]
    })[0]

    if (gadgetData === undefined) {
      navigate('/')
      return
    }
    gadgetPath = `/gadgets/${gadgetData?.id}`
  }

  let content
  if (loading) {
    content = (
      <div className="w-full h-full flex flex-row justify-center items-center">
        <AiOutlineLoading className="animate-spin text-5xl text-[#35C4F0]" />
        <div id="load" className="text-xl">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      </div>
    )
  } else if (productsData.isError) {
    content = (
      <div className="w-full h-full flex flex-row justify-center items-center animate-pulse gap-1 text-xl text-slate-300 opacity-70">
        Something Went Wrong
        <MdErrorOutline className="text-xl" />
      </div>
    )
  } else if (!loading && productsData.isSuccess) {
    content = (
      <div>
        <Route path='/'><Home leftBanner_Data={leftBanner_Data} rightBanner_Data={rightBanner_Data} /></Route>
        <Route path={categoryPath}><ShowProducts category={categories[cateIndex]} /></Route>
        <Route path={productPath}><ProductDetail product={productData} /></Route>
        <Route path='/cart'><Cart /></Route>
        <Route path='/orders'><Orders /></Route>
        <Route path={gadgetPath}><GadgetOverview product={gadgetData} /></Route>
      </div>
    )
  }
  return (
    <div className="text-gray-100 text-base h-screen w-screen bg-gradient-to-t from-gray-950 via-purple-800 to-gray-950 flex justify-center items-center overflow-hidden">
      <div className="w-cover h-cover bg-gray-950 rounded-3xl bg-center bg-fixed bg-opacity-80 overflow-x-hidden overflow-y-auto m-2 p-4">
        <NavBar />
        {content}
        <div className="shadow-full shadow-indigo-500/50 mt-20">
          <hr className="border-opacity-70 border-gray-700" />
        </div>
        <Footer />
      </div>
      {/* Style for hiding the scroll bar */}
      <style>
        {`
          .overflow-auto::-webkit-scrollbar {
            width: 0 !important;
          }
          .overflow-y-auto {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>
    </div>
  );
};

export default App;
