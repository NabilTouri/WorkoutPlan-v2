import { mysqlconnFn } from "../../hooks.server";

export const actions = {
    query: async ({ request }) => {
        const mysqlconn = await mysqlconnFn();
        // Get the form data
        const data = await request.formData()
        const sets = data.get('sets')
        const repetitions = data.get('repetitions')
        
        const id = 1;
        await mysqlconn.query(`
                UPDATE trainings
                SET sets = ?, repetitions = ?
                WHERE id = ?;
            `, [sets, repetitions, id]);
    }
}