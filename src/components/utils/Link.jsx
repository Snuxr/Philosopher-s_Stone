import classnames from "classnames";
import useNavigation from "../../Hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
    const { navigate, currPath, handleCategoryPath } = useNavigation()

    const classes = classnames(
        className,
        currPath === to && activeClassName
    )

    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault()

        if (to.includes('categories')) {
            handleCategoryPath(to)
        }
        navigate(to)
    }
    return <a href={to} onClick={handleClick} className={classes}>{children}</a>
}

export default Link;