import { useSelector } from "react-redux"
import BannerSlider from "../Components/Banners/BannerSlider"
import CategoryList from "../Components/Categories/CategoryList"
import ProductOverview from "../Components/Products/ProductOverview"
import { MdErrorOutline } from "react-icons/md";
import imgL1 from "../Assets/Banner_images/imgL1.png"
import imgL2 from "../Assets/Banner_images/imgL2.png"
import imgL3 from "../Assets/Banner_images/imgL3.png"
import imgR1 from "../Assets/Banner_images/imgR1.png"
import imgR2 from "../Assets/Banner_images/imgR2.png"
import imgR3 from "../Assets/Banner_images/imgR3.png"

const Home = () => {
    const { products } = useSelector((state) => {
        return state.prodCateSlice
    })

    const leftBanner_Data = [
        {
            id: 1,
            link: imgL1,
            name: "Meta Quest 3",
            title: "Meta Quest 3",
            route: "/products/meta quest 3",
        },
        {
            id: 2,
            link: imgL2,
            name: "Rabbit R1",
            title: "R1. your pocket companion",
            route: "/products/rabbit r1",
        },
        {
            id: 3,
            link: imgL3,
            name: "Samsung Galaxy S24 Ultra",
            title: "Samsung Galaxy S24 Ultra",
            route: "/products/samsung galaxy s24 ultra",
        },
    ]

    const rightBanner_Data = [
        {
            id: 4,
            link: imgR1,
            name: "Galaxy Tab S9 Ultra",
            title: "Galaxy Tab S9 Ultra",
            route: "/products/galaxy tab s9 ultra",
        },
        {
            id: 5,
            link: imgR2,
            name: "TP-7",
            title: "TP-7 field recorder",
            route: "/products/tp-7",
        },
        {
            id: 6,
            link: imgR3,
            name: "MacBook Pro M3",
            title: "Apple the new MacBook Pro featuring the M3 family of chips, making the world's best pro laptop even better",
            route: "/products/macbook pro M3",
        },
    ]

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