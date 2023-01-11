import classNames from 'classnames/bind';

import { Col, Container, Row } from 'react-bootstrap';
import images from '~/assets/images';
import Card from '~/components/Card';
import Text from '~/components/Text';
import styles from './Projects.module.scss';
const cx = classNames.bind(styles);
const projects = [
    {
        title: 'Chatify',
        description:
            'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.',
        image: images.chatifyProject,
        github: 'https://github.com/soumyajit4419/Chatify',
        demo: 'https://chatify-49.web.app/',
    },
    {
        title: 'Bits-0f-Code',
        description:
            'My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.',
        image: images.bitsOfCodeProject,
        github: 'https://github.com/soumyajit4419/Bits-0f-C0de',
        demo: '',
    },
    {
        title: 'Editor.io',
        description:
            'Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage',
        image: images.codeEditorProject,
        github: 'https://github.com/soumyajit4419/Editor.io',
        demo: '',
    },
    {
        title: 'Plant AI',
        description:
            "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
        image: images.plantAIProject,
        github: 'https://github.com/soumyajit4419/Plant_AI',
        demo: 'https://plant49-ai.herokuapp.com/',
    },
    {
        title: 'Ai For Social Good',
        description:
            "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention.",
        image: images.suicideProject,
        github: 'https://github.com/soumyajit4419/AI_For_Social_Good',
        demo: '',
    },
    {
        title: 'Face Recognition and Emotion Detection',
        description:
            "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
        image: images.emotionProject,
        github: 'https://github.com/soumyajit4419/Face_And_Emotion_Detection',
        demo: '',
    },
];
function Projects() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('section')}>
                <Text type="h1" title capital center>
                    My Recent
                    <Text type="span" primary>
                        Works
                    </Text>
                </Text>
                <Text center className="m-0">
                    Here are a few projects I've worked on recently.
                </Text>
                <Container>
                    <Row>
                        {projects.map((project, index) => (
                            <Col className={cx('item')} key={index} md={4}>
                                <Card topToBottom data={project} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Projects;
