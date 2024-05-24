import { redirect } from "@sveltejs/kit"
import { mysqlconnFn } from "../hooks.server";
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();

export const load = async ({ cookies }) => {
    const mysqlconn = await mysqlconnFn();
    if (cookies.get('session_token')) {
        const users = await mysqlconn.query("SELECT * FROM users")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
        const user = users.find(user => user.userAuthToken === cookies.get('session_token'))
        if (!user) {
            cookies.delete('session_token', { path: '/' })
            throw redirect(307, '/auth/login')
        }
        return {
            user,
        }
    }
    
}
