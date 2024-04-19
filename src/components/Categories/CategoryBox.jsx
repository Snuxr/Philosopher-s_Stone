// import { useEffect, useRef, useState } from "react";
import { GoChevronRight } from "react-icons/go"
// import DropdownPanel from "./DropdownPanel";

const Categories = ({ children }) => {
    // const [dropOn, setDropOn] = useState(false)
    // const dropRef = useRef(null)

    // useEffect(() => {
    //     const handler = (e) => {
    //         if (!dropRef.current) {
    //             return
    //         }
    //         if (!dropRef.current.contains(e.target)) {
    //             setDropOn(false)
    //         }
    //     }

    //     document.addEventListener('click', handler, true);

    //     return (
    //         document.removeEventListener('click', handler)
    //     )
    // }, [])

    // const handleClick = () => {
    //     setDropOn(curr => !curr)
    // }

    // const content = options.map((product, i) => {
    //     return (
    //         <DropdownPanel key={i}>{product}</DropdownPanel>
    //     )
    // })

    return (
        <div> {/*ref={dropRef}> */}
            <div className="group select-none flex flex-row justify-between items-center text-slate-300 font-light text-base bg-gray-700 bg-opacity-70 p-1 pl-3 pr-3 m-1 rounded-full outline-none border-none gap-1 hover:shadow-full hover:shadow-indigo-500/50">
                {children}
                <GoChevronRight className="transition ease-in-out delay-150 group-hover:translate-x-1 group-hover:scale-110  duration-150 group-hover:shadow-full group-hover:shadow-fuchsia-500/50"/>
                {/* {dropOn ? <GoChevronUp /> : <GoChevronDown />} */}
            </div>
            {/* <div className="absolute bg-opacity-30 bg-gray-800 rounded-2xl">
                {dropOn && content}
            </div> */}
        </div>
    )
}

export default Categories;