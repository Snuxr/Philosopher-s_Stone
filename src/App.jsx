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
    if(!orderData.isError && orderData.isSuccess) {
      dispatch(AddAllOrders(orderData.data))
    }
  },[dispatch, orderData.data, orderData.data])


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
        <Route path='/'><Home /></Route>
        <Route path={categoryPath}><ShowProducts category={categories[cateIndex]} /></Route>
        <Route path={productPath}><ProductDetail product={productData} /></Route>
        <Route path='/cart'><Cart/></Route>
        <Route path='/orders'><Orders /></Route>
      </div>
    )
  }
  return (
    <div className="text-gray-100 text-base h-screen w-screen bg-gradient-to-t from-gray-950 via-purple-800 to-gray-950 flex justify-center items-center overflow-hidden">
      <div className="w-cover h-cover bg-gray-950 rounded-3xl bg-center bg-fixed bg-opacity-80 overflow-x-hidden overflow-y-auto m-2 p-4">
        <NavBar />
        {content}
        <div className="shadow-full shadow-indigo-500/50 mt-20">
          <hr className="border-opacity-70 border-gray-700"/>
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
