import classNames from 'classnames/bind';

import { Col, Container, Row } from 'react-bootstrap';
import Text from '~/components/Text';
import Type from '~/components/Type';
import images from '~/assets/images';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
const introStrings = ['Developer', 'Deep Learning Engineer', 'MERN Stack Developer', 'Open Source Contributor'];
const socialLinks = [
    {
        icon: <FontAwesomeIcon icon={faGithub} />,
        title: 'Github',
        link: 'https://github.com/soumyajit4419',
    },
    {
        icon: <FontAwesomeIcon icon={faTwitter} />,
        title: 'Twitter',
        link: 'https://twitter.com/Soumyajit4419',
    },
    {
        icon: <FontAwesomeIcon icon={faLinkedin} />,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/soumyajit4419/',
    },
    {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        title: 'Instagram',
        link: 'https://www.instagram.com/soumyajit4419',
    },
];
function Home() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('section', { home: true })}>
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className={cx('heading')}>
                                <Text type="h1" title capital>
                                    Hi there!
                                    <span className={cx('icon')}>👋🏻</span>
                                </Text>
                                <Text type="h1" title upper>
                                    I'm
                                    <Text type="span" primary>
                                        Soumyajit Behera
                                    </Text>
                                </Text>
                                <Text type="span" primary className={cx('typing')}>
                                    <Type strings={introStrings} />
                                </Text>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className={cx('image')}>
                                <img src={images.homeIntroduction} alt="Home Introduction" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={cx('section', { intro: true })}>
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className={cx('introduction')}>
                                <Text type="h1" title upper center>
                                    LET ME{' '}
                                    <Text type="span" primary>
                                        INTRODUCE
                                    </Text>{' '}
                                    MYSELF
                                </Text>
                                <div className={cx('description')}>
                                    <Text paragraph>
                                        I fell in love with programming and I have at least learnt something, I think…
                                        🤷‍♂️
                                    </Text>
                                    <Text paragraph>
                                        I am fluent in classics like{' '}
                                        <Text type="span" primary italic>
                                            C++, Javascript and Python .
                                        </Text>
                                    </Text>
                                    <Text paragraph>
                                        My field of Interest's are building new{' '}
                                        <Text type="span" primary italic>
                                            Web Technologies and Products
                                        </Text>{' '}
                                        and also in areas related to{' '}
                                        <Text type="span" primary italic>
                                            Deep Learning and Natural Launguage Processing.
                                        </Text>
                                    </Text>
                                    <Text paragraph>
                                        Whenever possible, I also apply my passion for developing products with{' '}
                                        <Text type="span" primary italic>
                                            Node.js
                                        </Text>
                                        and{' '}
                                        <Text type="span" primary italic>
                                            Modern Javascript Library and Frameworks
                                        </Text>{' '}
                                        like{' '}
                                        <Text type="span" primary italic>
                                            React.js and Next.js
                                        </Text>
                                    </Text>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={cx('image')}>
                                <img src={images.avatar} alt="Home Avatar" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={cx('section', { social: true })}>
                <Text type="h1" title upper center>
                    Find me on
                </Text>
                <Text center>
                    Feel free to{' '}
                    <Text type="span" primary>
                        contact
                    </Text>{' '}
                    with me
                </Text>
                <ul className={cx('social__links')}>
                    {socialLinks.map((social, index) => (
                        <li key={index}>
                            <Button href={social.link} rounded effect="glow" target="_blank" alt={social.title}>
                                {social.icon}
                            </Button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Home;
