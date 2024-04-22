import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currPath, setCurrPath] = useState(window.location.pathname)

    useEffect(() => {
        const handler = () => {
            setCurrPath(window.location.pathname)
        }

        window.addEventListener('popstate', handler)

        return () => {
            window.removeEventListener('popstate', handler)
        }
    },[])

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrPath(to)
    }

    const contextValue = {
        currPath,
        navigate,
    }

    return <NavigationContext.Provider value={contextValue}>
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext
