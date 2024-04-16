import { useContext } from "react";
import NavigationContext from "../Context/navigation";

const useNavigation = () => {
    return useContext(NavigationContext)
}

export default useNavigation;