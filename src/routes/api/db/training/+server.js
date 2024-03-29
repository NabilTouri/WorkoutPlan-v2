import { json } from "@sveltejs/kit";
import { mysqlconnFn } from '../../../../hooks.server.js'

export const GET = async () => {
    try {
        // Get the training from the database
        const mysqlconn = await mysqlconnFn();
        const training = await mysqlconn.query("SELECT training.id, day.name AS day, exercise.name AS exercise, training.sets, training.repetitions, training.user_id FROM training JOIN day ON training.day_id = day.id JOIN exercise ON training.exercise_id = exercise.id;")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        // Return the training
        return json(training, { status: 200 });
    } catch (error) {
        console.error("Error during the request to the database: ", error);
        return {
            status: 500,
            body: { error: "Internal Server Error" }
        };
    }
}