import { mysqlconnFn } from "../../hooks.server";

export const actions = {
    query: async ({ request }) => {
        const mysqlconn = await mysqlconnFn();
        // Get the form data
        const data = await request.formData()
        const sets = data.get('sets')
        const repetitions = data.get('repetitions')
        const exercise_id = 161
        
        const id = 1;
        await mysqlconn.query(`
                UPDATE trainings
                SET sets = ?, repetitions = ?, exercise_id = ?
                WHERE id = ?;
            `, [sets, repetitions, exercise_id, id]);
    }
}