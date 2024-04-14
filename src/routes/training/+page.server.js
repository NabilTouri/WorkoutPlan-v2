import { redirect } from "@sveltejs/kit"
import { mysqlconnFn } from '../../hooks.server.js'

export const load = async ({ cookies, url, fetch }) => {
    const title = "Training"
    const mysqlconn = await mysqlconnFn();

    // console.log("Home page universal load function called")
    if (!cookies.get('session_token')) {
        throw redirect(307, `/auth/login?redirectTo=${url.pathname}`)
    }

    const day = await mysqlconn.query("SELECT * FROM days")
        .then(function([rows,fields]) {
            // console.log(rows);
            return rows;
        });
    
    const training = await mysqlconn.query("SELECT trainings.id, days.name AS day, exercises.name AS exercise, exercises.muscle, exercises.difficulty, trainings.sets, trainings.repetitions, trainings.user_id FROM trainings JOIN days ON trainings.day_id = days.id JOIN exercises ON trainings.exercise_id = exercises.id;")
    .then(function([rows,fields]) {
        // console.log(rows);
        return rows;
    });
    console.log(training);
    return {
        title,
        day,
        training
    }
}