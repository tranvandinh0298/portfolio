import classNames from 'classnames/bind';

import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import Button from '~/components/Button';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <p className={cx('copyright')}>Designed and developed by Soumyajit Behera</p>
                    </Col>
                    <Col md={4}>
                        <p className={cx('copyright')}>Copyright © 2023 SB</p>
                    </Col>
                    <Col md={4}>
                        <div className={cx('links')}>
                            <Button href="https://github.com/tranvandinh0298/portfolio">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                            <Button>
                                <FontAwesomeIcon icon={faTwitter} />
                            </Button>
                            <Button>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Button>
                            <Button>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
