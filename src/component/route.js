import Gllery from './gallery';
import About from './about';
import Table from './table';
import Login from './login';

const RouterMap = {
    gllery: {
        path: '/gllery',
        component: Gllery
    },
    about: {
        path: '/about',
        component: About
    },
    table: {
        path: '/table',
        component: Table
    },
    login: {
        path: '/login',
        component: Login
    }
}

export default RouterMap;