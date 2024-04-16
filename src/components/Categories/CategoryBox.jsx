import { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import DropdownPanel from "./DropdownPanel";

const Categories = ({ children, options }) => {
    const [dropOn, setDropOn] = useState(false)
    const dropRef = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            if (!dropRef.current) {
                return
            }
            if (!dropRef.current.contains(e.target)) {
                setDropOn(false)
            }
        }

        document.addEventListener('click', handler, true);
        
        return (
            document.removeEventListener('click', handler)
        )
    }, [])

    const handleClick = () => {
        setDropOn(curr => !curr)
    }

    const content = options.map((product, i) => {
        return (
            <DropdownPanel key={i}>{product}</DropdownPanel>
        )
    })

    return (
        <div ref={dropRef}>
            <div className="select-none flex flex-row justify-between items-center text-gray-950 font-light text-sm bg-gray-100 bg-opacity-50 p-0.5 pl-3 pr-3 m-1 rounded-full outline-none border-none gap-1" onClick={handleClick}>
                {children}
                {dropOn ? <GoChevronUp /> : <GoChevronDown />}
            </div>
            <div className="w-40 relative left-10 bg-opacity-10 bg-gray-100 rounded-2xl">
                {dropOn && content}
            </div>
        </div>
    )
}

export default Categories;