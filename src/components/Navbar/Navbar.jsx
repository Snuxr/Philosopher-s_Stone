import SearchInput from "../Forms/SearchInput";
import Link from "../Utils/Link";

const NavBar = () => {
    const NavLinks = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'Deals', path: '/deals' },
        { id: 3, label: 'Cart', path: '/cart' },
        { id: 4, label: 'Orders', path: '/orders' }
    ]
    const content = NavLinks.map((link) => {
        return (
            <Link
                key={link.id}
                to={link.path}
                className='p-1 text-slate-300 text-base rounded-lg hover:shadow-full hover:shadow-indigo-500/90'
            >
                {link.label}
            </Link>
        )
    })
    return (
        <div className="flex flex-row text-slate-300 items-center justify-between p-1 m-1">
            <label id="logo" className="font-extralight text-3xl rounded-lg tracking-wider p-1 ">Snuxr</label>
            <div className="flex flex-row justify-between items-center gap-6">
                <SearchInput />
                {content}
            </div>
        </div>
    )
}

export default NavBar