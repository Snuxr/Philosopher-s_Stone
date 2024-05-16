const Alert = ({children}) => {
    return (
        <div className="w-full h-full flex flex-row justify-center items-center animate-pulse gap-1 text-xl text-slate-300 opacity-70">
            {children}
        </div>
    )
}

export default Alert;