import CategoryList from "../Components/Categories/CategoryList";
import ExpandedProdList from "../Components/ExpandedProducts/ExpandedProdList";

const ShowProducts = () => {
    return (
        <div className="mt-8 mb-8 mr-6 ml-6 flex flex-col items-center gap-10">
            <CategoryList />
            <ExpandedProdList/>
        </div>
    )
}

export default ShowProducts;