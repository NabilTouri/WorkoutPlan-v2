import { json } from '@sveltejs/kit'
import { mysqlconnFn } from '../../../../hooks.server.js'

export const GET = async () => {
    try {
        const mysqlconn = await mysqlconnFn();
        const user = await mysqlconn.query("SELECT * FROM user")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        return json(user, { status: 200 });
    } catch (error) {
        console.error("Errore durante il recupero di user:", error);
        return {
            status: 500,
            body: { error: "Internal Server Error" }
        };
    }  
}