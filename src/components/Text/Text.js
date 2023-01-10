import classNames from 'classnames/bind';
import styles from './Text.module.scss';
const cx = classNames.bind(styles);
function Text({
    type,
    // color
    primary = false,
    // style
    upper = false,
    lower = false,
    capital = false,
    italic = false,
    // position
    center = false,
    left = false,
    right = false,
    justify = false,
    // size
    title = false,
    paragraph = false,
    // addition
    className,
    children,
}) {
    let Wrapper = 'p';
    // text type: h1, h2, h3, ....
    if (title) Wrapper = 'h1';
    if (type) Wrapper = type;
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
        justify,
        title,
        paragraph,
    });
    return <Wrapper className={classes}> {children} </Wrapper>;
}

export default Text;
