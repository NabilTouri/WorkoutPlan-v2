import { json } from "@sveltejs/kit";
import { mysqlconnFn } from '../../../../hooks.server.js'

export const GET = async () => {
    try {
        const mysqlconn = await mysqlconnFn();
        const exercise = await mysqlconn.query("SELECT * FROM exercise")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        return json(exercise, { status: 200 });
    } catch (error) {
        console.error("Errore durante il recupero di exercise:", error);
        return {
            status: 500,
            body: { error: "Internal Server Error" }
        };
    }
}