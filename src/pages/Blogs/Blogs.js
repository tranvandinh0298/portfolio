import classNames from 'classnames/bind';
import styles from './Blogs.module.scss';
const cx = classNames.bind(styles);
function Blogs() {
    return (
        <div className={cx('wrapper')}>
            <h2>Blogs page</h2>
        </div>
    );
}

export default Blogs;
