import { redirect } from "@sveltejs/kit"
import { mysqlconnFn } from '../../hooks.server.js'

export const load = async ({ cookies, url, parent }) => {
    const title = "Training"
    const mysqlconn = await mysqlconnFn();

    const { user } = await parent()

    // console.log("Home page universal load function called")
    if (!cookies.get('session_token')) {
        throw redirect(307, `/auth/login?redirectTo=${url.pathname}`)
    }

    const days = await mysqlconn.query("SELECT * FROM days")
        .then(function([rows,fields]) {
            // console.log(rows);
            return rows;
        });
    
    const trainings = await mysqlconn.query(`SELECT trainings.id, days.name AS day, exercises.name AS exercise, exercises.muscle, exercises.difficulty, trainings.sets, trainings.repetitions, trainings.user_id FROM trainings JOIN days ON trainings.day_id = days.id JOIN exercises ON trainings.exercise_id = exercises.id WHERE user_id = ${user.id};`)
        .then(function([rows,fields]) {
            // console.log(rows);
            return rows;
        });

    const exercises = await mysqlconn.query("SELECT * FROM exercises")
        .then(function([rows,fields]) {
            // console.log(rows);
            return rows;
        });
    
    const muscles = await mysqlconn.query("SELECT DISTINCT muscle FROM exercises")
        .then(function([rows,fields]) {
            // console.log(rows);
            return rows;
        });
    
    return {
        title,
        days,
        trainings,
        exercises,
        muscles
    }
}

export const actions = {
    add: async ({ request, fetch }) => {
        console.log("Add action called")
        const data = await request.formData()
        const day = data.get('day')
        const exercise = data.get('exercise')
        const sets = data.get('sets')
        const reps = data.get('reps')
        const user_id = await fetch('/api/user').then(res => res.json()).then(data => data.id)
        try {
            const mysqlconn = await mysqlconnFn();
            await mysqlconn.query(`INSERT INTO trainings (day_id, exercise_id, sets, repetitions, user_id) VALUES (${day}, ${exercise}, ${sets}, ${reps}, ${user_id})`)
        }
        catch (error) {
            console.log(error)
        }
    },
    delete: async ({ request }) => {
        console.log("Delete action called")
    }
}