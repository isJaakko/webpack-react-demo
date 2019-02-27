const sqlite = require('sqlite3');
const method = require('./method');
const util = require('./util');

// 打开数据库，若不存在则创建
const database = new sqlite.Database('review.db', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('connected to database...');
    }
});

// 确认表已建立
// method.operatingTable({
//     database,
//     tableName: 'course_score',
//     column: util.tableCol
// }).then(() => {
//     // // 插入数据
//     // method.insertData({
//     //     database,
//     //     tableName: 'course_score',
//     //     data: util.tableData
//     // });

//     // // 查询第一条数据
//     // method.getData({
//     //     database,
//     //     sql: 'SELECT * FROM course_score'
//     // })

//     // // 查询全部数据
//     // method.getAllData({
//     //     database,
//     //     sql: 'SELECT * FROM coursr_score'
//     // })

//     database.each('SELECT * FROM course_score', (err, row) => {
//         database.run('UPDATE course_score SET experiment_number = 2');
//     }, (err, rowNumber) => {
//         console.log(rowNumber);
//     })
// })

// database.close();

module.exports = database;