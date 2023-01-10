import classNames from 'classnames/bind';

import { Col, Container, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from 'react-icons/di';
import {
    SiPytorch,
    SiFirebase,
    SiNextdotjs,
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
} from 'react-icons/si';
import Text from '~/components/Text';
import List from '~/components/List';
import images from '~/assets/images';
import styles from './About.module.scss';
import Card from '~/components/Card';
import GitHubCalendar from 'react-github-calendar';
const cx = classNames.bind(styles);
const hobbies = ['Playing games', 'Writing Tech Blogs', 'Traveling'];
const languages = [
    { icon: <CgCPlusPlus />, alt: 'C++' },
    { icon: <DiJavascript1 />, alt: 'Js' },
    { icon: <DiNodejs />, alt: 'NodeJs' },
    { icon: <DiReact />, alt: 'React' },
    { icon: <DiMongodb />, alt: 'MongoDB' },
    { icon: <SiNextdotjs />, alt: 'Dotjs' },
    { icon: <DiGit />, alt: 'Git' },
    { icon: <SiFirebase />, alt: 'Firebase' },
    { icon: <DiPython />, alt: 'Python' },
    { icon: <SiPytorch />, alt: 'Pytorch' },
];
const tools = [
    { icon: <SiLinux />, alt: 'Linus' },
    { icon: <SiVisualstudiocode />, alt: 'Visual Studio Code' },
    { icon: <SiPostman />, alt: 'Postman' },
    { icon: <SiVercel />, alt: 'Vercel' },
    { icon: <SiHeroku />, alt: 'Heroku' },
];
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
                <Container>
                    <Row>
                        {languages.map((language, index) => (
                            <Col key={index} md={3}>
                                {<Card data={language} />}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className={cx('section')}>
                <Text type="h1" title capital center>
                    <Text type="span" primary>
                        Tools
                    </Text>
                    I use
                </Text>
                <Container>
                    <Row>
                        {tools.map((tool, index) => (
                            <Col key={index} md={3}>
                                {<Card data={tool} />}
                            </Col>
                        ))}
                    </Row>
                </Container>
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
