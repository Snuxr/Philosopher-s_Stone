import classnames from "classnames";

const Line = ({className}) => {
    const classes = classnames('shadow-full shadow-indigo-500/50', className);

    return (
        <div className={classes}>
            <hr className="border-opacity-70 border-gray-700" />
        </div>
    )
}

export default Line;