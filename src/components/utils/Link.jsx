import classnames from "classnames"; 
import useNavigation from "../../hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
    const { navigate, currentPath } = useNavigation()

    const classes = classnames(
        className,
        currentPath === to && activeClassName
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