import { useDispatch, useSelector } from "react-redux";
import { AddManyProducts, useFetchProductsQuery } from "../../store";
import ExpandedProd from "./ExpandedProd"
import { useEffect } from "react";

const ExpandedProdList = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => {
        return state.prodCateSlice
    })

    const {data, isError, isSuccess} = useFetchProductsQuery()
    
    let ExpandedProdContent;

    if(isError) {
        ExpandedProdContent = <img className="w-96 m-10" src='https://httpstatusdogs.com/img/402.jpg' alt="402" />
    }

    useEffect(() => {
        if(!isError && isSuccess) {
            dispatch(AddManyProducts(data))
        }
    },[dispatch, data])

    if(!isError && isSuccess) {
        ExpandedProdContent = products?.map((product) => {
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