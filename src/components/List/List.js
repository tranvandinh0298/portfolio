import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '~/components/Text';
import styles from './List.module.scss';
const cx = classNames.bind(styles);
function List({ data }) {
    return (
        <ul className={cx('list')}>
            {data.map((title, index) => (
                <li key={index} className={cx('list__item')}>
                    <span className={cx('list__icon')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <Text type="span" paragraph capital>
                        {title}
                    </Text>
                </li>
            ))}
        </ul>
    );
}
List.propTypes = {
    data: PropTypes.object.isRequired,
};

export default List;
