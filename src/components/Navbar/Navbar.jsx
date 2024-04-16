import SearchInput from "../Forms/SearchInput";
import Link from "../Utils/Link";

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
                className='p-1 text-slate-300 text-base rounded-lg outline-none focus:shadow-full focus:shadow-indigo-500/90 hover:shadow-full hover:shadow-indigo-500/90'
            >
                {link.label}
            </Link>
        )
    })
    return (
        <div className="flex flex-row text-slate-300 items-center justify-between p-1 gap-2 m-1">
            <label className="font-extralight text-3xl rounded-lg shadow-full shadow-indigo-500/90 p-1 ">Snuxr</label>
            <SearchInput />
            <div className="flex gap-7">
                {content}
            </div>
        </div>
    )
}

export default NavBar