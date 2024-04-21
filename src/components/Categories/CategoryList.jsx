import { useSelector } from "react-redux";
import CategoryBox from "./CategoryBox"

const CategoryList = () => {
    const { categories }= useSelector((state) => {
        return state.prodCateSlice
    })
    let CategoryBoxContent;

    if (!categories) {
        CategoryBoxContent = <img className="w-96 m-10" src='https://httpstatusdogs.com/img/402.jpg' alt="402" />
    }

    if (categories) {
        CategoryBoxContent = categories.map((category) => {
            return (
                <CategoryBox key={category.id} to={`/categories/${category.title}`} className="flex flex-row gap-2">{category.title}</CategoryBox>
            )
        })
    }
    return (
        <div className="flex flex-row items-center gap-2">
            {CategoryBoxContent}
        </div>
    )
}

export default CategoryList;