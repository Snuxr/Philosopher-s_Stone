import SearchInput from "./forms/SearchInput";
import Link from "./utils/Link";

const NavBar = () => {
    const NavLinks = [
        { id:1, label: 'Deals', path: '/deals' },
        { id:2, label: 'Cart', path: '/cart' },
        { id:3, label: 'Orders', path: '/orders' }
    ]
    const content = NavLinks.map((link) => {
        return (
            <Link
                key={link.id}
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