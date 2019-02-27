import Review from '../../view/review';
import Result from '../../view/result';
import ReviewDetail from '../../view/reviewDetail';
import Admin from '../../view/setting/admin';
import CommentTemplate from '../../view/setting/comment';

const RouteMap = {
    review: {
        name: '评阅',
        path: '/review',
        component: Review,
        icon: 'check'
    },
    resultlist: {
        name: '查看成绩',
        path: '/result',
        component: Result,
        icon: 'ordered-list'
    },
    setting: {
        name: '设置',
        path: '/setting',
        icon: 'setting',
        children: [{
            name: '修改密码',
            path: '/admin',
            component: Admin
        }, {
            name: '评语模板',
            path: '/comment',
            component: CommentTemplate
        }]
    },
    reviewDetail: {
        name: '评阅详情',
        path: '/review/:id',
        component: ReviewDetail,
        icon: 'check'
    }
}

export default RouteMap;