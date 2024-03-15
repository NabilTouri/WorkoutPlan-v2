import { json } from "@sveltejs/kit";
import { mysqlconnFn } from '../../../../hooks.server.js'

export const GET = async () => {
    try {
        const mysqlconn = await mysqlconnFn();
        const muscles = await mysqlconn.query("SELECT DISTINCT muscle FROM exercise")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        return json(muscles, { status: 200 });
    } catch (error) {
        console.error("Errore durante il recupero di muscle:", error);
        return {
            status: 500,
            body: { error: "Internal Server Error" }
        };
    }
}