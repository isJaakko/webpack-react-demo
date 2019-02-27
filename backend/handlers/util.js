const courseCol = [
    'course_id TEXT NOT NULL PRIMARY KEY,',
    'course_name TEXT NOT NULL',
];

const scoreCol = [
    'id INTEGER PRIMARY KEY,',
    'course_id TEXT NOT NULL,',
    'stu_id TEXT NOT NULL,',
    'score_total REAL,',
    'comment TEXT,',
    `last_modified NOT NULL DEFAULT (datetime('now','localtime'))`,
];

const stuCol = [
    'stu_id TEXT PRIMARY KEY NOT NULL,',
    'stu_name TEXT NOT NULL',
];

const courseData = [{
    course_id: '0001',
    course_name: '实验一',
}, {
    course_id: '0002',
    course_name: '实验二',
}];

const scoreData = [{
    course_id: '0001',
    stu_id: '5120150000',
    score_total: 89,
    comment: '优秀',
}, {
    course_id: '0001',
    stu_id: '5120150001',
    score_total: 93,
    comment: '良好',
}, {
    course_id: '0002',
    stu_id: '5120150001',
    score_total: 59,
    comment: '不合格',
}, {
    course_id: '0002',
    stu_id: '5120150002',
    score_total: 90,
    comment: '一般',
}];

const stuData = [{
    stu_name: 'stu0',
    stu_id: '5120150000'
}, {
    stu_name: 'stu1',
    stu_id: '5120150001'
}, {
    stu_name: 'stu2',
    stu_id: '5120150002'
}]

module.exports = {
    courseCol,
    scoreCol,
    stuCol,
    courseData,
    scoreData,
    stuData,
}