import useNavigation from "../../Hooks/useNavigation";

const Route = ({ path, children }) => {
    const { currPath } = useNavigation()
    
    if (path === currPath) {
        return children;
    }

    return null;
}

export default Route;