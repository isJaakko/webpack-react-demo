import About from './about';
import Table from './table';
import Login from './login';
import Test from './test';

const RouterMap = {
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
    },
    test: {
        path: '/test',
        component: Test
    }
}

export default RouterMap;