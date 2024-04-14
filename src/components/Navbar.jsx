import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "./utils/Link";

const NavBar = () => {
    const NavLinks = [
        { label: 'Deals', path: '/deals' },
        { label: 'Cart', path: '/cart' },
        { label: 'Orders', path: '/orders' }
    ]
    const content = NavLinks.map((link, i) => {
        return (
            <Link
                key={i}
                to={link.path}
                className='m-3 text-white text-lg'
            >
                {link.label}
            </Link>
        )
    })
    return (
        <div className="flex flex-row gap-2">
            <label>Snuxr</label>
            <div>Category Brand <MdKeyboardArrowDown /></div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default NavBar