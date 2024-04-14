import { redirect } from "@sveltejs/kit"
import { mysqlconnFn } from "../hooks.server";

export const load = async ({ fetch, cookies }) => {
    const mysqlconn = await mysqlconnFn();
    if (cookies.get('session_token')) {
        const users = await mysqlconn.query("SELECT * FROM users")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        const user = users.find(user => user.userAuthToken === cookies.get('session_token'))
        if (!user) {
            await fetch('/api/cookies',
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            throw redirect(307, '/auth/login')
        }
        return {
            user
        }
    }
}