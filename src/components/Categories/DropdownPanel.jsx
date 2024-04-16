import classnames from 'classnames'

const DropdownPanel = ({ children, classNames, ...rest }) => {

    const classes = classnames('border-none outline-none break-normal p-1 pl-2 pr-2 font-extralight text-sm text-gray-100', classNames)

    return (
        <div {...rest} className={classes}>{children} <hr className=' border-opacity-70 border-gray-700'/></div>
    )
}

export default DropdownPanel