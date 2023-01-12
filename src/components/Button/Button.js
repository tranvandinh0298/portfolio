import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    target,
    primary = false,
    disabled = false,
    rounded = false,
    underline = false,
    effect,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // xỏa bỏ event nếu nút bị disabled
    if (disabled) {
        Object.keys(disabled).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') delete props[key];
        });
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
        if (target) props.target = target;
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        disabled,
        rounded,
        underline,
        [effect]: effect,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    underline: PropTypes.bool,
    effect: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
