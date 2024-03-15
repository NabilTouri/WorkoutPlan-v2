import { json } from "@sveltejs/kit";
import { mysqlconnFn } from '../../../../hooks.server.js'

export const GET = async () => {
    try {
        // Get the muscle from the database
        const mysqlconn = await mysqlconnFn();
        const muscles = await mysqlconn.query("SELECT DISTINCT muscle FROM exercise")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        // Return the muscle
        return json(muscles, { status: 200 });
    } catch (error) {
        console.error("Error during the request to the database: ", error);
        return {
            status: 500,
            body: { error: "Internal Server Error" }
        };
    }
}