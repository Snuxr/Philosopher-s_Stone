import { useSelector } from "react-redux";
import ExpandedProd from "./ExpandedProd"

const ExpandedProdList = ({category}) => {
    const { products } = useSelector((state) => {
        return state.prodCateSlice
    })

    let ExpandedProdContent;

    if(products.lenght == 0) {
        ExpandedProdContent = <img className="w-96 m-10" src='https://httpstatusdogs.com/img/402.jpg' alt="402" />
    }

    if(products.lenght !== 0) {
        ExpandedProdContent = products?.map((product) => {
            if(product.title === category.title) {
                return <ExpandedProd key={product.id} product={product}/>
            }
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