import { json } from "@sveltejs/kit";
import { mysqlconnFn } from '../../../../hooks.server.js'

export const GET = async () => {
    try {
        // Get the exercise from the database
        const mysqlconn = await mysqlconnFn();
        const exercise = await mysqlconn.query("SELECT * FROM exercise")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        // Return the exercise
        return json(exercise, { status: 200 });
    } catch (error) {
        console.error("Error during the request to the database: ", error);
        return {
            status: 500,
            body: { error: "Internal Server Error" }
        };
    }
}