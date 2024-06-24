import { json } from "@sveltejs/kit";
import { mysqlconnFn } from "../../../hooks.server";

export const GET = async ({ cookies }) => {
    const toker = cookies.get('session_token')
    if (!toker) {
        return json(401,'Unauthorized')
    }
    const mysqlconn = await mysqlconnFn();
    const user = await mysqlconn.query(`SELECT * FROM users WHERE userAuthToken = '${toker}'`)
        .then(function([rows,fields]) {
            return rows[0];
        });
    if (!user) {
        return json(404,'Not found')
    }
    return json(user)
}