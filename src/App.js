import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import Loading from '~/components/Loading/';
import ScrollToTop from '~/components/ScrollToTop';
function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const handleLoading = () => {
            if (document.readyState === 'complete') setLoading(false);
        };
        window.addEventListener('load', handleLoading);
        return () => window.removeEventListener('load', handleLoading);
    }, []);

    return (
        <Router>
            <Loading display={loading} />
            <ScrollToTop />
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Component = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
