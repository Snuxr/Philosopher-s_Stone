import { useFetchCategoriesQuery } from "../../store";
import CategoryBox from "./CategoryBox"

const CategoryList = () => {
    const {data, isError, isSuccess} = useFetchCategoriesQuery()

    let CategoryBoxContent;
    
    if (isError) {
        CategoryBoxContent = <img className="w-96 m-10" src='https://httpstatusdogs.com/img/402.jpg' alt="402" />
    }

    if (!isError && isSuccess) {
        CategoryBoxContent = data.map((category) => {
            return (
                <CategoryBox key={category.id} className="flex flex-row gap-2">{category.title}</CategoryBox>
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