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

    return <NavigationContext.Provider value={{currPath, navigate}}>
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext
