import { redirect } from "@sveltejs/kit"
import { mysqlconnFn } from '../../hooks.server.js'

export const load = async ({ cookies, url, fetch }) => {
    const title = "Training"
    const mysqlconn = await mysqlconnFn();

    // console.log("Home page universal load function called")
    if (!cookies.get('session_token')) {
        throw redirect(307, `/auth/login?redirectTo=${url.pathname}`)
    }

    const day = await mysqlconn.query("SELECT * FROM day")
        .then(function([rows,fields]) {
            // console.log(rows);
            return rows;
        });
    return {
        title,
    }
}