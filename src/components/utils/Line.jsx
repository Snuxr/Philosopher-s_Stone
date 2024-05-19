import classnames from "classnames";
import { twMerge } from "tailwind-merge";

const Line = ({className, hrClassName}) => {
    const classes = classnames('shadow-full shadow-indigo-500/50', className);

    return (
        <div className={classes}>
            <hr className={twMerge("border-opacity-70 border-gray-700", hrClassName)}/>
        </div>
    )
}

export default Line;