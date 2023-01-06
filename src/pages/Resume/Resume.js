import classNames from 'classnames/bind';
import styles from './Resume.module.scss';
const cx = classNames.bind(styles);
function Resume() {
    return (
        <div className={cx('wrapper')}>
            <h2>Resume page</h2>
        </div>
    );
}

export default Resume;
