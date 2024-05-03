const Button = ({children, ...rest}) => {
  return (
    <div {...rest}>
      <button className="p-2 rounded-lg text-sm font-normal text-gray-800 bg-gray-100 bg-opacity-95 hover:bg-gray-200 hover:bg-opacity-20  hover:text-gray-100 shadow-full shadow-indigo-500/50">{children}</button>
    </div>
  )
}

export default Button
