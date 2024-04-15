import SearchInput from "./forms/SearchInput";
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
                className='m-3 text-slate-300 text-base'
            >
                {link.label}
            </Link>
        )
    })
    return (
        <div className="flex flex-row text-slate-300 items-center justify-between p-1">
            <label className="font-extralight text-3xl">Snuxr</label>
            <SearchInput />
            <div>
                {content}
            </div>
        </div>
    )
}

export default NavBar