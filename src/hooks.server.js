// import { DB_USER, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_PORT, CA_CERT } from '$env/static/private'
// import mysql from 'mysql2/promise';

// let mysqlconn = null;

// export function mysqlconnFn() {

//     if (!mysqlconn) {
//         mysqlconn = mysql.createConnection({ 
//             host: DB_HOST,
//             user: DB_USER,
//             password: DB_PASSWORD,
//             database: DB_DATABASE,
//             port: DB_PORT, // Imposta la porta corretta
//             ssl: {
//                 ca: CA_CERT, // Inserisci il certificato CA fornito
//                 rejectUnauthorized: true // Imposta a true se vuoi che la connessione venga rifiutata se il certificato non è valido
//             }
//         });
//     }
    
//     return mysqlconn;
// }


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