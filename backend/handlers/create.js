const sqlite = require('sqlite3');
const method = require('./method');
const util = require('./util');

const database = new sqlite.Database('review.db');

method.operatingTable({
    database: database,
    tableName: 'course',
    column: util.courseCol,
}).then(() => {
    method.insertData({
        database: database,
        tableName: 'course',
        data: util.courseData
    });
})

method.operatingTable({
    database: database,
    tableName: 'student',
    column: util.stuCol,
}).then(() => {
    method.insertData({
        database: database,
        tableName: 'student',
        data: util.stuData
    });
})

method.operatingTable({
    database: database,
    tableName: 'score',
    column: util.scoreCol,
}).then(() => {
    method.insertData({
        database: database,
        tableName: 'score',
        data: util.scoreData
    });
})