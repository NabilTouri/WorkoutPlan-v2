import { DB_USER, DB_HOST, DB_PASSWORD, DB_DATABASE } from '$env/static/private'
import mysql from 'mysql2/promise';

let mysqlconn = null;

export function mysqlconnFn() {

    if (!mysqlconn) {
        mysqlconn = mysql.createConnection({ 
            host: DB_HOST,
            user:  DB_USER,
            password: DB_PASSWORD,
            database: DB_DATABASE
        });
    }

    return mysqlconn;
}