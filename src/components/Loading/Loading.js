import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Loading.module.scss';
const cx = classNames.bind(styles);
function Loading({ display = false }) {
    return (
        <div className={cx('preloader', { display })}>
            <img src={images.loading} alt="Loading" />
        </div>
    );
}
Loading.propTypes = {
    display: PropTypes.bool,
};

export default Loading;
