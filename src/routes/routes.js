import config from '~/config';
import pages from '~/pages';
const publicRoutes = [
    {
        path: config.routes.home,
        component: pages.home,
    },
    {
        path: config.routes.about,
        component: pages.about,
    },
    {
        path: config.routes.projects,
        component: pages.projects,
    },
    {
        path: config.routes.resume,
        component: pages.resume,
    },
    {
        path: config.routes.blogs,
        component: pages.blogs,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
