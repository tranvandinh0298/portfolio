import { Col, Container, Row } from 'react-bootstrap';
import { SiLinux, SiVisualstudiocode, SiPostman, SiHeroku, SiVercel } from 'react-icons/si';
// import styles from './Tools.module.scss';
import Card from '~/components/Card';
const tools = [
    { icon: <SiLinux />, alt: 'Linus' },
    { icon: <SiVisualstudiocode />, alt: 'Visual Studio Code' },
    { icon: <SiPostman />, alt: 'Postman' },
    { icon: <SiVercel />, alt: 'Vercel' },
    { icon: <SiHeroku />, alt: 'Heroku' },
];
function Skills() {
    return (
        <Container>
            <Row>
                {tools.map((tool, index) => (
                    <Col className={'item'} key={index} md={3}>
                        {<Card data={tool} />}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;
