import PropTypes from 'prop-types';
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

Text.propTypes = {
    type: PropTypes.string,
    primary: PropTypes.bool,
    upper: PropTypes.bool,
    lower: PropTypes.bool,
    capital: PropTypes.bool,
    italic: PropTypes.bool,
    center: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    justify: PropTypes.bool,
    title: PropTypes.bool,
    paragraph: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Text;
