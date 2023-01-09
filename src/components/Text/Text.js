import classNames from 'classnames/bind';
import styles from './Text.module.scss';
const cx = classNames.bind(styles);
function Text({
    type,
    primary = false,
    upper = false,
    lower = false,
    capital = false,
    italic = false,
    center = false,
    left = false,
    right = false,
    className,
    children,
}) {
    let Wrapper = 'p';
    // text type: h1, h2, h3, ....
    if (type) {
        Wrapper = type;
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        upper,
        lower,
        capital,
        italic,
        center,
        left,
        right,
    });
    return <Wrapper className={classes}> {children} </Wrapper>;
}

export default Text;
