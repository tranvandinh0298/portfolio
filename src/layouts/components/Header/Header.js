import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import config from '~/config';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { faFileLines, faHouse, faPenNib, faSquarePollHorizontal, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    const [sticky, setSticky] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setSticky(true);
            else setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar expanded={showNav} fixed="top" expand="md" className={cx('wrapper', { sticky })}>
            <Container>
                <Navbar.Brand href="/" className={cx('logo')}>
                    <img src={images.logo} alt="Sb" />
                </Navbar.Brand>
                <Navbar.Toggle
                    className={cx('nav__toggle', { show: showNav })}
                    aria-controls="responsive-navbar-nav"
                    aria-expanded={showNav}
                    onClick={() => {
                        setShowNav(showNav ? false : 'show');
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Button
                                to={config.routes.home}
                                underline
                                leftIcon={<FontAwesomeIcon icon={faHouse} />}
                                onClick={() => setShowNav(false)}
                            >
                                Home
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                                to={config.routes.about}
                                underline
                                leftIcon={<FontAwesomeIcon icon={faUser} />}
                                onClick={() => setShowNav(false)}
                            >
                                About
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                                to={config.routes.projects}
                                underline
                                leftIcon={<FontAwesomeIcon icon={faSquarePollHorizontal} />}
                                onClick={() => setShowNav(false)}
                            >
                                Projects
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                                to={config.routes.resume}
                                underline
                                leftIcon={<FontAwesomeIcon icon={faFileLines} />}
                                onClick={() => setShowNav(false)}
                            >
                                Resume
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                                to={config.routes.blogs}
                                underline
                                leftIcon={<FontAwesomeIcon icon={faPenNib} />}
                                onClick={() => setShowNav(false)}
                            >
                                Blogs
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                                href="https://github.com/tranvandinh0298"
                                primary
                                effect="jump"
                                leftIcon={<FontAwesomeIcon icon={faGithub} />}
                                onClick={() => setShowNav(false)}
                            >
                                GitHub
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
