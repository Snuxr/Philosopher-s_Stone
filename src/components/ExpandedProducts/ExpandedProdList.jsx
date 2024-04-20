import { useFetchProductsQuery } from "../../store";
import ExpandedProd from "./ExpandedProd"

const ExpandedProdList = () => {
    const {data, isError, isSuccess} = useFetchProductsQuery()
    
    let ExpandedProdContent;

    if(isError) {
        return 
    }
    if(!isError && isSuccess) {
        ExpandedProdContent = data.map((product) => {
            return <ExpandedProd key={product.id} product={product}/>
        })
    }
    return (
        <div className="h-cover w-cover bg-indigo-600 p-6 bg-opacity-5 rounded-xl flex flex-col items-center">
            <div className="backdrop-blur-lg rounded-sm flex flex-col gap-2">
                {ExpandedProdContent}
            </div>
        </div>
    )
}

export default ExpandedProdList;