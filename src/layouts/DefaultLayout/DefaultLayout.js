import classNames from 'classnames/bind';

import Particle from '~/components/Particle';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <Particle />
                <div className={cx('inner')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
