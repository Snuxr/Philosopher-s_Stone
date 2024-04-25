import Link from "../Utils/Link"

const FooterTags = ({children, footerPaths}) => {
    const footerContent = footerPaths.map((footerPath)=> {
        return (
            <Link className="text-slate-300 font-normal text-sm cursor-pointer p-0.5 pl-1 underline underline-offset-4" key={footerPath.pathId} to={footerPath.link} >{footerPath.name}</Link>
        )
    })
    return (
        <div className="flex flex-col gap-0.5 justify-start items-start">
            <div className="font-semibold pb-2">{children}</div>
            {footerContent}
        </div>
    )
}

export default FooterTags;