import { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);
    return <Fragment />;
}

export default ScrollToTop;
