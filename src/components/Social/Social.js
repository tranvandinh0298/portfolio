import classNames from 'classnames/bind';
import styles from './Social.module.scss';
const cx = classNames.bind(styles);
function Social({ round, children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Social;
