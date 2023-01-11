import classNames from 'classnames/bind';

import Text from '~/components/Text';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);
function Card({
    center = true,
    topToBottom = false,
    bottomToTop = false,
    leftToRight = false,
    rightToLeft = false,
    data,
}) {
    const classes = cx('wrapper', {
        center,
        topToBottom,
        bottomToTop,
        leftToRight,
        rightToLeft,
    });
    return (
        <div className={classes}>
            {!!data.image && <img className={cx('image')} src={data.image} alt={data.title} />}
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
