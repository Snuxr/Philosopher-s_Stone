import classnames from "classnames"
import { twMerge } from 'tailwind-merge'

const Button = ({children, ...rest}) => {
  const classes = classnames(rest.className);

  return (
      <button {...rest} className={twMerge("flex flex-row justify-center items-center gap-2 p-2 rounded-lg text-sm font-normal text-slate-300 bg-white bg-opacity-10 hover:bg-opacity-90 hover:text-gray-950", classes)}>{children}</button>
  )
}

export default Button
