import { useSelector } from "react-redux"
import BannerSlider from "../Components/Banners/BannerSlider"
import CategoryList from "../Components/Categories/CategoryList"
import ProductOverview from "../Components/Products/ProductOverview"
import { MdErrorOutline } from "react-icons/md";

const Home = ({leftBanner_Data, rightBanner_Data}) => {
    const { products } = useSelector((state) => {
        return state.prodCateSlice
    })

    let ProductOverviewContent;

    if (products.length === 0) {
        ProductOverviewContent = (
            <div className="w-full h-full flex flex-row justify-center items-center animate-pulse gap-1 text-xl text-slate-300 opacity-70">
                Something Went Wrong
                <MdErrorOutline className="text-xl"/>
            </div>
        )
    }

    if (products.length !== 0) {
        const newProdArr = products.slice(0, 14);

        ProductOverviewContent = newProdArr?.map((product) => {
            let filteredTitle = product.name.replace('Sleek', '')
            return (
                <ProductOverview key={product.id} product={product} >{filteredTitle}</ProductOverview>
            )
        })
    }

    return (
        <div className="mt-8 mb-8">
            <div className="grid grid-cols-2 gap-2">
                <BannerSlider data={leftBanner_Data} />
                <BannerSlider data={rightBanner_Data} />
            </div>
            <div className="flex flex-col m-6 gap-8 items-center">
                <CategoryList />
                <div className="flex flex-row flex-wrap justify-start gap-8">{ProductOverviewContent}</div>
            </div>
        </div>
    )
}

export default Home;