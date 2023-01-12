import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
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
            {!!data.buttons && data.buttons.length !== 0 && (
                <div className={cx('actions')}>
                    {data.buttons.map((btn, index) => (
                        <Button
                            key={index}
                            primary
                            leftIcon={btn.icon}
                            href={btn.href}
                            effect="hightlight"
                            target="_blank"
                        >
                            {btn.title}
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
}

Card.propTypes = {
    center: PropTypes.bool,
    topToBottom: PropTypes.bool,
    bottomToTop: PropTypes.bool,
    leftToRight: PropTypes.bool,
    rightToLeft: PropTypes.bool,
    data: PropTypes.object.isRequired,
};

export default Card;
