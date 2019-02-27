/**
 * 使用 Promise 封装一层操作，确保表存在，再对表进行插入、更新等操作
 * @param {Object} options 
 * @param {Object} database 数据库对象
 * @param {String} tableName 表名
 * @param {Array} column 列名及约束
 * 下同
 */
const operatingTable = async (options) => {
    const { database, tableName, column } = options;

    return new Promise((resolve, reject) => {
        let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
        column.map(item => {
            sql += item;
        });
        sql += ');';
        database.run(sql, err => {
            if (err) {
                throw err;
            } else {
                console.log(`${tableName} has been created successfully...`);
                resolve(database);
            }
        })
    });
}

/**
 * 插入数据
 * 插入 sql 语句如下：`INSERT INTO ${tableName} (name, experiment_number, stu_id, comment, is_review) VALUES('linux教学实验', '1', '5120151234', 89, '优秀', 0, );`;
 * @param {Array} data 待插入数据
 */
const insertData = (options) => {
    const { database, tableName, data } = options;

    data.map(item => {
        let sql = convertInsertSql(item, tableName);
        console.log(sql)
        database.run(sql);
    })
}

/**
 * 将待插入数据转化为 sql 语句
 * @param {Object} obj 待插入数据
 */
const convertInsertSql = (obj, tableName) => {
    const data = Object.keys(obj);
    let sql = `INSERT INTO ${tableName} (`;
    data.map((item, index) => {
        sql += `${item}`;
        if (index < data.length - 1) {
            sql += ',';
        }
    });
    sql += ') \n VALUES (';
    data.map((item, index) => {
        if (typeof obj[item] === 'string') {
            sql += `'${obj[item]}'`;
        } else {
            sql += `${obj[item]}`;
        }
        if (index < data.length - 1) {
            sql += ',';
        }
    })
    sql += ');';

    return sql;
}

/**
 * 查询第一条数据
 * @param {String} sql 查询语句
 */
const getData = (options, callback) => {
    const { database, sql } = options;
    database.get(sql, [], (err, data) => {
        if (err) {
            throw err;
        } else {
            console.log(data);
            callback(data);
        }
    })
}

/**
 * 查询数据
 * @param {String} sql 查询语句
 */
const getAllData = (options, callback) => {
    const { database, sql } = options;

    database.all(sql, [], (err, data) => {
        if (err) {
            throw err;
        } else {
            callback(data);
            // console.log(data);
        }
    })
}

module.exports = {
    operatingTable,
    insertData,
    getData,
    getAllData,
}