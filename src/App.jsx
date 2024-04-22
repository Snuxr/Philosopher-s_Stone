import NavBar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ShowProducts from "./Pages/ShowProducts";
import Route from "./Components/Utils/Route"
import useNavigation from "./Hooks/useNavigation";
import { useSelector } from "react-redux";
import binarySearch from "./Hooks/binarySearch";

const App = () => {
  const { currPath, navigate } = useNavigation()
  const { categories } = useSelector((state) => {
    return state.prodCateSlice
  })

  let categoryPath;
  let cateIndex;
  if(currPath.includes('categories')) {

    const target = currPath.split('/')[2]
    const index  = binarySearch(categories, target)

    if(index !== -1 && target &&  categories[index].title === target ) {
      cateIndex = index
      categoryPath = currPath
    } else {
      navigate('/')
    }

  }

  return (
    <div className="text-gray-100 text-base h-screen w-screen bg-gradient-to-t from-gray-950 via-purple-800 to-gray-950 flex justify-center items-center overflow-hidden">
      <div className="w-cover h-cover bg-gray-950 rounded-3xl bg-center bg-fixed bg-opacity-80 overflow-x-hidden overflow-y-auto m-2 p-4">
        <NavBar />
        <Route path='/'><Home /></Route>
        <Route path={categoryPath}><ShowProducts category={categories[cateIndex]}/></Route>
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
