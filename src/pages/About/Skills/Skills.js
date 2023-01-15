import { Col, Container, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from 'react-icons/di';
import { SiPytorch, SiFirebase, SiNextdotjs } from 'react-icons/si';
// import styles from './Skills.module.scss';
import Card from '~/components/Card';
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
function Skills() {
    return (
        <Container>
            <Row>
                {languages.map((language, index) => (
                    <Col className={'item'} key={index} md={3} xs={6}>
                        {<Card data={language} />}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;
