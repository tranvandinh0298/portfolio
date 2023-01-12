import classNames from 'classnames/bind';

import { Col, Container, Row } from 'react-bootstrap';
import Text from '~/components/Text';
import List from '~/components/List';
import images from '~/assets/images';
import styles from './About.module.scss';
import Skills from './Skills';
import Tools from './Tools';
import GitHubCalendar from 'react-github-calendar';
const cx = classNames.bind(styles);
const hobbies = ['Playing games', 'Writing Tech Blogs', 'Traveling'];

function About() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('section')}>
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className={cx('heading')}>
                                <Text type="h1" title upper center>
                                    Know Who
                                    <Text type="span" primary>
                                        I'm
                                    </Text>
                                </Text>
                                <div className={cx('description')}>
                                    <Text paragraph>
                                        Hi Everyone, I am{' '}
                                        <Text type="span" primary>
                                            Soumyajit Behera
                                        </Text>{' '}
                                        from{' '}
                                        <Text type="span" primary>
                                            Bhubaneswar, India.
                                        </Text>{' '}
                                        <br />I am a junior pursuing IMSC in Maths and Computing in BIT Mesra.
                                    </Text>
                                    <Text paragraph>Apart from coding, some other activities that i love to do!</Text>
                                </div>
                                <List data={hobbies} />
                                <Text center primary paragraph>
                                    "Strive to build things that make a difference!" <br />
                                    --- Soumyajit
                                </Text>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className={cx('image')}>
                                <img src={images.aboutIntroduction} alt="About Introduction" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={cx('section')}>
                <Text type="h1" title capital center>
                    Professional
                    <Text type="span" primary>
                        Skill set
                    </Text>
                </Text>
                <Skills />
            </section>
            <section className={cx('section')}>
                <Text type="h1" title capital center>
                    <Text type="span" primary>
                        Tools
                    </Text>
                    I use
                </Text>
                <Tools />
            </section>
            <section className={cx('section')}>
                <Text type="h1" title capital center>
                    Days I
                    <Text type="span" primary>
                        Code
                    </Text>
                </Text>
                <Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <GitHubCalendar
                            username="tranvandinh0298"
                            blockSize={15}
                            blockMargin={5}
                            color="#c084f5"
                            fontSize={16}
                        />
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default About;
