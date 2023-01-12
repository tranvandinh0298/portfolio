import classNames from 'classnames/bind';

import Works from './Works';
import Text from '~/components/Text';
import styles from './Projects.module.scss';
const cx = classNames.bind(styles);

function Projects() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('section')}>
                <Text type="h1" title capital center>
                    My Recent
                    <Text type="span" primary>
                        Works
                    </Text>
                </Text>
                <Text center className="m-0">
                    Here are a few projects I've worked on recently.
                </Text>
                <Works />
            </section>
        </div>
    );
}

export default Projects;
