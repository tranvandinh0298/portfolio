import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
const cx = classNames.bind(styles);
function Projects() {
    return (
        <div className={cx('wrapper')}>
            <h2>Projects page</h2>
        </div>
    );
}

export default Projects;
