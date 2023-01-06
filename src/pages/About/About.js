import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);
function About() {
    return (
        <div className={cx('wrapper')}>
            <h2>About page</h2>
        </div>
    );
}

export default About;
