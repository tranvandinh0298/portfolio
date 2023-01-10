import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
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
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    const handleScroll = () => {
        if (window.scrollY > 0) setSticky(true);
        else setSticky(false);
    };
    return (
        <header
            className={cx('wrapper', {
                sticky,
            })}
        >
            <Container className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Sb" />
                </Link>
                <nav>
                    <ul className={cx('nav__list')}>
                        <li className={cx('nav__item')}>
                            <Button to={config.routes.home} underline leftIcon={<FontAwesomeIcon icon={faHouse} />}>
                                Home
                            </Button>
                        </li>
                        <li className={cx('nav__item')}>
                            <Button to={config.routes.about} underline leftIcon={<FontAwesomeIcon icon={faUser} />}>
                                About
                            </Button>
                        </li>
                        <li className={cx('nav__item')}>
                            <Button
                                to={config.routes.projects}
                                underline
                                leftIcon={<FontAwesomeIcon icon={faSquarePollHorizontal} />}
                            >
                                Projects
                            </Button>
                        </li>
                        <li className={cx('nav__item')}>
                            <Button
                                to={config.routes.resume}
                                underline
                                leftIcon={<FontAwesomeIcon icon={faFileLines} />}
                            >
                                Resume
                            </Button>
                        </li>
                        <li className={cx('nav__item')}>
                            <Button to={config.routes.blogs} underline leftIcon={<FontAwesomeIcon icon={faPenNib} />}>
                                Blogs
                            </Button>
                        </li>
                        <li className={cx('nav__item')}>
                            <Button primary effect="jump" leftIcon={<FontAwesomeIcon icon={faGithub} />}>
                                GitHub
                            </Button>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
