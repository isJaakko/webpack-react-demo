export const menuMap = {
    review: {
        name: '评阅',
        path: '/review',
        icon: 'check',
    },
    resultlist: {
        name: '查看成绩',
        path: '/result',
        icon: 'ordered-list',
    },
    setting: {
        name: '设置',
        path: '/setting',
        icon: 'setting',
        children: [{
            name: '修改密码',
            path: '/admin',
        }, {
            name: '管理评语',
            path: '/comment',
        }]
    }
}