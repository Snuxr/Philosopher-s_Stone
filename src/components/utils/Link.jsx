import classnames from "classnames";
import useNavigation from "../../Hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
    const { navigate, currPath } = useNavigation()

    const classes = classnames(
        'cursor-default',
        className,
        currPath === to && activeClassName
    )

    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault()
        navigate(to)
    }
    return <a href={to} onClick={handleClick} className={classes}>{children}</a>
}

export default Link;