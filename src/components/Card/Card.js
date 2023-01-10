import classNames from 'classnames/bind';

import Text from '~/components/Text';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);
function Card({ data }) {
    return (
        <div className={cx('wrapper')}>
            {!!data.icon && <div className={cx('icon')}>{data.icon}</div>}
            {!!data.title && (
                <Text paragraph center>
                    {data.title}
                </Text>
            )}
            {!!data.description && <Text justify>{data.description}</Text>}
        </div>
    );
}

export default Card;
