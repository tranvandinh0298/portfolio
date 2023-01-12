import classNames from 'classnames/bind';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import images from '~/assets/images';
import Card from '~/components/Card';
import styles from './Works.module.scss';
const cx = classNames.bind(styles);
const projects = [
    {
        title: 'Chatify',
        description:
            'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.',
        image: images.chatifyProject,
        buttons: [
            {
                title: 'GitHub',
                icon: <FontAwesomeIcon icon={faGithub} />,
                href: 'https://github.com/soumyajit4419/Chatify',
            },
            {
                title: 'Demo',
                icon: <FontAwesomeIcon icon={faDesktop} />,
                href: 'https://chatify-49.web.app/',
            },
        ],
    },
    {
        title: 'Bits-0f-Code',
        description:
            'My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.',
        image: images.bitsOfCodeProject,
        buttons: [
            {
                title: 'GitHub',
                icon: <FontAwesomeIcon icon={faGithub} />,
                href: 'https://github.com/soumyajit4419/Bits-0f-C0de',
            },
        ],
    },
    {
        title: 'Editor.io',
        description:
            'Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage',
        image: images.codeEditorProject,
        buttons: [
            {
                title: 'GitHub',
                icon: <FontAwesomeIcon icon={faGithub} />,
                href: 'https://github.com/soumyajit4419/Editor.io',
            },
        ],
    },
    {
        title: 'Plant AI',
        description:
            "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
        image: images.plantAIProject,
        buttons: [
            {
                title: 'GitHub',
                icon: <FontAwesomeIcon icon={faGithub} />,
                href: 'https://github.com/soumyajit4419/Plant_AI',
            },
            {
                title: 'Demo',
                icon: <FontAwesomeIcon icon={faDesktop} />,
                href: 'https://plant49-ai.herokuapp.com/',
            },
        ],
    },
    {
        title: 'Ai For Social Good',
        description:
            "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention.",
        image: images.suicideProject,
        buttons: [
            {
                title: 'GitHub',
                icon: <FontAwesomeIcon icon={faGithub} />,
                href: 'https://github.com/soumyajit4419/AI_For_Social_Good',
            },
        ],
    },
    {
        title: 'Face Recognition and Emotion Detection',
        description:
            "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
        image: images.emotionProject,
        buttons: [
            {
                title: 'GitHub',
                icon: <FontAwesomeIcon icon={faGithub} />,
                href: 'https://github.com/soumyajit4419/Face_And_Emotion_Detection',
            },
        ],
    },
];
function Works() {
    return (
        <Container>
            <Row>
                {projects.map((project, index) => (
                    <Col className={cx('item')} key={index} md={4}>
                        <Card topToBottom data={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Works;
