import classnames from 'classnames'

const Panel = ({ children, classNames, ...rest }) => {

    const classes = classnames('border rounded p-4 shadow bg-white w-full', classNames)

    return (
        <div {...rest} className={classes}>{children}</div>
    )
}

export default Panel